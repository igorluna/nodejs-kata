const fs = require("fs");
const path = require("path");

// Criar uma pasta
fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("Erro ao tentar criar pasta: ", error);
  }
  console.log("Criado com sucesso!");
});

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "teste", "teste.txt"),
  "Hello node!",
  (error) => {
    if (error) {
      return console.log("Erro ao tentar escrever arquivo: ", error);
    }
    console.log("Arquivo escrito com sucesso");
  }
);

// Adicionar informação num arquivo
fs.appendFile(
  path.join(__dirname, "teste", "teste.txt"),
  "Hello node2!",
  (error) => {
    if (error) {
      return console.log("Erro ao tentar escrever arquivo: ", error);
    }
    console.log("Arquivo escrito com sucesso");
  }
);

// Ler o arquivo
fs.readFile(
  path.join(__dirname, "teste", "teste.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Erro ao tentar escrever arquivo: ", error);
    }
    console.log(data.toString());
  }
);

// Lembrando que cada chamada dessa é ASSICRONA, do jeito que está é possivel o READ retornar
// - vazio
// - Hello node!
// - Hello Node!Hello node2!
// Para garantir  um fluxo sincrono é necessário adicionar a chamada dentro do CALLBACK da anterior
// WRITE (callback) => APPEND (callback) => READ
