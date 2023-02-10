const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Psicologos } = require('../models');
const secret = require('../config/secret');

module.exports = {
    getAll: async (req, res) => {
        try {
            const psicologos = await Psicologos.findAll();
        res.status(200).json(psicologos);
        } catch (error) {
            res.status(500).json(`Erro na requiseção.`);
        }
        
    },
    getById: async (req, res) => {

        try {
            const { id } = req.params;
            const psicologo = await Psicologos.findByPk(id);
            res.status(200).json(psicologo);
        } catch (error) {
            res
                .status(404)
                .json({ error: "Id não encontrado." });
        }
    },
    store: async (req, res) => {
        try {
            const {
                body: { nome, email, senha, apresentacao },
            } = req;

            const hashSenha = bcrypt.hashSync(senha, 10);

            const psicologoExistente = await Psicologos.findOne({ where: { email } });

            if (psicologoExistente) {
                return res.status(400).json({ message: "Email já cadastrado" });
            }

            const { id } = await Psicologos.create({
                nome,
                email,
                senha: hashSenha,
                apresentacao,
            });

            const user = {
                id,
                nome,
            };

            const token = jwt.sign(user, secret.key);

            res.status(201).json({
                token,
                user,
            });
        } catch (error) {
            res.status(400);
        }

    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, email, senha, apresentacao } = req.body;

            const psicologo = await Psicologos.findByPk(id);

            if (!psicologo) {
                res.status(400).json("Id não encontrado.");
            }

            const hashSenha = bcrypt.hashSync(senha, 10);

            await psicologo.update({
                nome,
                email,
                senha: hashSenha,
                apresentacao,
            });

            res.status(200).json(psicologo);

        } catch (error) {
            res.status(400);
        }
    },
    destroy: async (req, res) => {
        const {
            params: { id },
        } = req;

        try {
            const psicologo = await Psicologos.findByPk(id);

            if (!psicologo) {
                res.sendStatus(404).json('Id não encontrado.');
            }

            await psicologo.destroy();

            res.sendStatus(204);
        } catch (error) {
            res
                .status(404)
                .json({ error: "Id não encontrado." });
        }
    },
    login: async (req, res) => {
        const {
            body: { email, senha },
        } = req;

        const psicologoUser = await Psicologos.findOne({ where: { email } });

        if (!psicologoUser || !bcrypt.compareSync(senha, psicologoUser.senha)) {
            return res.status(401).json({ message: "E-mail ou senha inválido, verifique e tente novamente”" });
        }

        const dadosUser = {
            id: psicologoUser.id,
            nome: psicologoUser.nome,
            email: psicologoUser.email,
        };

        const token = jwt.sign(dadosUser, secret.key);

        res.status(200).json({
            token,
            psicologoUser: dadosUser,
        });
    }
};