const { Psicologos } = require("../models");

module.exports = async (req, res, next) => {
  if (req.auth) {
    const psicologoUser = await Psicologos.findByPk(req.auth.id);

    if (!psicologoUser) {
      next({
        status: 401,
        name: "UnauthorizedError",
        inner: {
          message: "Usuário não encontrado",
        },
      });
    }    
  }
  next();
};
