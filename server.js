// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { initDB, getAllPins, addPin, updatePin, deletePin } = require('./db');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

initDB();

app.get('/api/pins', async (_, res) => {
    const pins = await getAllPins();
    res.json(pins);
});

app.post('/api/pins', async (req, res) => {
    const { x, y, feedback } = req.body;
    const id = await addPin(x, y, feedback);
    res.json({ id });
});

app.put('/api/pins/:id', async (req, res) => {
    const { feedback } = req.body;
    const { id } = req.params;
    await updatePin(id, feedback);
    res.json({ success: true });
});

app.delete('/api/pins/:id', async (req, res) => {
    const { id } = req.params;
    await deletePin(id);
    res.json({ success: true });
});

app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
