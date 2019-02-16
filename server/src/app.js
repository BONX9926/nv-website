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

let port = 8080

app.listen(port, () => {
    console.log(`server running port ${port}`)
})