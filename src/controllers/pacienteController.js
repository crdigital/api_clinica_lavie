const { Pacientes } = require('../models');

module.exports = {
    getAll: async (req, res) => {    
        try {
            const pacientes = await Pacientes.findAll();
            res.status(200).json(pacientes);
        } catch (error) {
            res
                .status(500)
                .json({error: "Erro na requisição." });   
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const paciente = await Pacientes.findByPk(id);

            if(!paciente){
                return res.status(404).json({message: "Id não encontrado."});
            }
            res.status(200).json(paciente);            
        } catch (error) {
            res
                .status(500)
                .json({error: "Erro na requisição.."});
        }
    },
    store: async (req, res) => {
        try {
            const { nome, email, data_nascimento } = req.body;

            const paciente = await Pacientes.create({
                nome,
                email,
                data_nascimento,
            });
            res.status(201).json(paciente);
        } catch (error) {
            res
            .status(400)
            .json({ error: "Erro na requisição." });
        }
    },
    update: async(req, res) =>{
        try {
            const {id} = req.params;
            const { nome, email, data_nascimento  } = req.body;

            const paciente = await Pacientes.findByPk(id);
            
            if(!paciente){
                return res.status(404).json({message: "Id não encontrado."});
            }

            await paciente.update({
                nome, 
                email,
                data_nascimento,
            });

            res.status(200).json(paciente);

        } catch (error) {
            res
              .status(400)
              .json({ error: "Erro na requisição." });
          }
    },
    destroy: async (req, res) => {
        const {
            params: { id },
        } = req;

        try {
            const paciente = await Pacientes.findByPk(id);

            if (!paciente) {
                res.sendStatus(404).json('Id não encontrado.');
            }

            await paciente.destroy();

            res.sendStatus(204);
        } catch (error) {
            res
                .status(404)
                .json({ error: "Id não encontrado." });
        }
    }
};