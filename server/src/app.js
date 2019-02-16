let express = require("express")
const app = express()

app.get('/status', (req, res) => {
    res.send("Hello server nodejs")
})

let port = 8080

app.listen(port, () => {
    console.log(`server running port ${port}`)
})