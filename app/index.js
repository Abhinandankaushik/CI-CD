const express = require('express');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
}); 

app.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Hello abhinandan, ${id}!`);
});

app.get('name', (req, res) => {
    const name = req.query.name || 'Guest';
    res.send(`Hello abhinandan, ${name}!`);
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
module.exports = app;