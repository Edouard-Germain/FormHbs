const express = require('express')
const app = express()
const port = 5000
const engine = require('express-handlebars').engine

app.engine("handlebars", engine())
app.set("view engine", "handlebars")

app.use(express.urlencoded({ extended: true }))

app.get('/form',(req,res)=>{
    res.render('home')
})
app.listen(port, () => {
    console.log(`serveur start on port ${port}`)
})

