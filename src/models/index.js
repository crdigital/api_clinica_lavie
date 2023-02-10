const Psicologos = require('./psicologos'); 
const Pacientes = require('./pacientes');
const Atendimentos = require('./atendimentos');

Psicologos.hasMany(Atendimentos);
Pacientes.hasMany(Atendimentos);

Atendimentos.belongsTo(Psicologos);
Atendimentos.belongsTo(Pacientes);

module.exports = {
    Psicologos,
    Pacientes,
    Atendimentos
}