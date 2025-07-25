const express = require('express');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
}); 


if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
module.exports = app;