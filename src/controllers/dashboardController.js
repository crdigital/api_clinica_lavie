const {Atendimentos, Pacientes, Psicologos} = require('../models');

module.exports = {
    numPacientes: async (req, res) => {
        try {
            const { count } = await Pacientes.findAndCountAll();

            res.status(200).json(count);
        } catch (error) {
            res.status(500).json({
                error: `Erro na requisição. ${error}`
            });
        }
    },
    numPsicologos: async (req, res) => {
        try {
            const { count } = await Psicologos.findAndCountAll();

            res.status(200).json(count);
        } catch (error) {
            res.status(500).json({
                error: `Erro na requisição. ${error}`
            });
        }
    },
    numAtendimentos: async (req, res) => {
        try {            
            const { count } = await Atendimentos.findAndCountAll();

            res.status(200).json(count);
        } catch (error) {
            res.status(500).json({
                error: `Erro na requisição. ${error}`
            });
        }
    },
    mediaAtendimentoPsicologo: async (req, res) => {        
        try {
            const atendimentos = await (await Atendimentos.findAndCountAll()).count;
            const psicologos =   await (await Psicologos.findAndCountAll()).count;
            res.status(200).json(atendimentos / psicologos);
        } catch (error) {
            res.status(500).json({
                error: `Erro na requisição. ${error}`
            });
        }
    },
};