const express = require('express')
const app = express(),
    bodyParser = require('body-parser'),
    PORT = 3030

// place holder for the data
const users = []

app.use(bodyParser.json())

app.get('/api/users', (req, res) => {
    console.log(('/api/users/ called!!!'))
    res.json(users)
})

app.post('/api/users', (req, res) => {
    const user = req.body.user
    console.log('Adding user::::', user)
    users.push(user)
    res.json("user added")
})

app.get('/', (req, res) => {
    res.send('App works')
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})