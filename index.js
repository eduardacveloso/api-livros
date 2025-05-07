const express = require('express');
const app = express();
const PORT = 3000;

const { swaggerUi, swaggerSpec } = require('./swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());

let livros = [
    { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis" },
    { id: 2, titulo: "O Cortiço", autor: "Aluisio Azevedo" }
];

/**
 * @swagger
 * /livros:
 *   get:
 *     summary: Retorna a lista de livros
 *     responses:
 *       200:
 *         description: Lista de livros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   titulo:
 *                     type: string
 *                   autor:
 *                     type: string
 */
app.get('/livros', (req, res) => {
    res.json(livros);
});

/**
 * @swagger
 * /livro:
 *   post:
 *     summary: Adiciona um novo livro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *     responses:
 *       201:
 *         description: Livro adicionado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 titulo:
 *                   type: string
 *                 autor:
 *                   type: string
 */
app.post('/livro', (req, res) => {
    const { titulo, autor } = req.body;
    const novoLivro = {
        id: livros.length + 1,
        titulo,
        autor
    };
    livros.push(novoLivro);
    res.status(201).json(novoLivro);
});

app.listen(PORT, () => {
    console.log(`Serviço rodando em http://localhost:${PORT}`);
    console.log(`Swagger disponível em http://localhost:${PORT}/api-docs`);
});
