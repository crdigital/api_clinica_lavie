CREATE DATABASE clinica_lavie;

USE clinica_lavie;

CREATE TABLE psicologos(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(155) NOT NULL,
    senha VARCHAR(155) NOT NULL,
    apresentacao TEXT NOT NULL
);

CREATE TABLE pacientes(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(155) NOT NULL,
    data_nascimento DATE NOT NULL
);

CREATE TABLE atendimentos(
     id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
     paciente_id INTEGER NOT NULL,
     psicologo_id INTEGER NOT NULL,
     data_atendimento DATETIME NOT NULL,
     observacao TEXT NOT NULL,
     FOREIGN KEY (`paciente_id`) REFERENCES `pacientes`(`id`),
     FOREIGN KEY (`psicologo_id`) REFERENCES `psicologos`(`id`)
);