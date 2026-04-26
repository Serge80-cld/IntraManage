const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3000;

app.get('/test', (req, res) => {
    res.send("API OK");
});

app.listen(port, () => {
    console.log(`API running on port ${port}`);
});

const { sql, config } = require('./db');

app.get('/employees', async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('SELECT * FROM Employees');
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur serveur');
    }
});

app.listen(3000, () => {
    console.log('API démarrée sur http://localhost:3000');
});
