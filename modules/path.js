const path = require("path");

// Basename - o nome do arquivo atual
console.log(path.basename(__filename));

// Dirname - diretório aonde o arquivo está
console.log(path.dirname(__filename));

// Extname - extensão do arquivo
console.log(path.extname(__filename));

// Parse - várias informações sobre o arquivo
console.log(path.parse(__filename));

// Join - Juntar caminhos de arquivo
console.log(path.join(__dirname, "diretorio", "teste.json"));
