
const express = require('express')
const cors = require('cors')

const app = express()
const port = 5000

let animals = [{ id: '123', name: 'Cat'}, { id: '234', name: 'Dog'}, { id: '345', name: 'Zebra'}, { id: '456', name: 'Lion'}];

app.use(cors())
app.use(express.json())

app.get('/api/animals', (req, res) => {
  res.json(animals)
});

app.post('/api/animals', (req, res) => {
    animals.push(req.body);
    res.status(201).end();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})