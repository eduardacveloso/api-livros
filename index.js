const express = require('express');
const app = express();
const PORT = 3000; 

app.use(express.json());

let livros = [
    { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis" },
    { id: 2, titulo: "O Cortiço", autor: "Aluisio Azevedo" }
];

app.get('/livros', (req, res) => {
    res.json(livros);
})

app.listen(PORT, () => {
    console.log(`Serviço rodando em http://localhost:${PORT}`);
});
