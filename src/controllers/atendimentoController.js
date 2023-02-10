const { Atendimentos, Psicologos, Pacientes } = require('../models');

module.exports = {
    getAll: async (req, res) => {
        try {
            const atendimentos = await Atendimentos.findAll({include: Psicologos});
            res.status(200).json(atendimentos);
        } catch (error) {
            res
                .status(500)
                .json({erro: `Erro na requisição. ${error}` });   
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const atendimentos = await Atendimentos.findByPk(id, {include: [Psicologos, Pacientes]});
            
            if(!atendimentos){
                return res.status(404).json({message: "Id não encontrado"});
            }
            
            res.status(200).json(atendimentos);
        } catch (error) {
            res
                .status(400)
                .json({error: `Erro na requisição. ${error}`},);   
        }
    },
    store: async (req, res) => {
        try {
            const psicologo_id = req.auth.id;
            const { paciente_id, data_atendimento, observacao } = req.body;

            const novoAtendimento = await Atendimentos.create({
                paciente_id,                
                psicologo_id,
                data_atendimento,
                observacao
            });

            res.status(201).json(novoAtendimento);

        } catch (error) {
            res
                .status(400)
                .json({
                    error: `Erro na requisição. ${error}`,
                });
        }
    },
};