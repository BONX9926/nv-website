let express = require("express")
const app = express()
let bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/status', (req, res) => {
    res.send("Hello server nodejs")
})

app.get('/hello/:person', (req, res) => {
    res.send("say hello with "+ req.params.person)
})

app.post('/hello', (req, res) => {
    res.send("OH post - "+ req.body.name)
})


// RESFUL api

// create user
app.post('/user', (req, res) => {
    res.send("Create user")
})

// update user
app.put('/user/:userId', (req, res) => {
    res.send("Update user")
})

// delete user
app.delete('/user/:userId', (req, res) => {
    res.send("Delete user")
})

// get user by id
app.get('/user/:userId', (req, res) => {
    res.send("view user by id")
})

// get all user
app.get('/users/', (req, res) => {
    res.send("views all user")
})

let port = 8080

app.listen(port, () => {
    console.log(`server running port ${port}`)
})