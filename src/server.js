const express = require('express');

const database = require('./services/database');

const handleError = require('./middlewares/handleError');
const jwtMiddleware = require("./middlewares/jwt");
const authMiddleware = require("./middlewares/auth");

const mainRoutes = require('./routes/main');
const psicologoRoutes = require('./routes/psicologos');
const pacienteRoutes = require('./routes/pacientes');
const atendimentoRoutes = require('./routes/atendimentos');
const dashboardRoutes = require('./routes/dashboard');

const server = express();
const port = 3000;

server.use(express.json());

server.use(
  jwtMiddleware.unless({
    path: ["/", "/psicologos/login","/psicologos/registro"],
  })
);
server.use(authMiddleware);

server.use("/", mainRoutes);
server.use("/psicologos", psicologoRoutes);
server.use('/pacientes', pacienteRoutes);
server.use('/atendimentos', atendimentoRoutes);
server.use('/dashboard', dashboardRoutes);

server.use(handleError);

const main = async () => {
    try {
      await database.authenticate();
      // await database.sync();
  
      server.listen(port, () => {
        console.log(`Servidor executando na porta ${port}`);
      });
    } catch (error) {
      console.error("Não foi possível conectar com o banco de dados:", error);
    }
  };
  
  main();