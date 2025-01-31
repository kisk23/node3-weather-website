const path = require("path")
const express = require('express')
const hbs = require("hbs")

const geocode = require("./utils/geocode");
const forcast = require("./utils/forcast")

const port = 3000
console.log(__dirname)

const viewpath = path.join(__dirname, "../templates/views")
const partialpath = path.join(__dirname, "../templates/partials")
const app = express()
app.set('view engine', 'hbs')
app.set("views", viewpath)

app.use(express.static(path.join(__dirname, "../public")))
hbs.registerPartials(partialpath)
app.get("/", (req, res) => {
    res.render("index", {
        title: "weather app",
        head: "main ",
        name: "anwar"
    })

})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "about me",
        head: "my name is anw ",
        name: "mohamed"
    })

})
app.get("/help", (req, res) => {
    res.render("help", {
        message: "help center",
        title: "help",
        name: "raed"

    })

})
app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({ error: "you should set a search term" })
    }
    res.send({
        products: []
    })

})
app.get('/weather', (req, res) => {
    const address = req.query.address
    if (!address) {
        return res.send({ error: "you should set a address term" })
    }
    geocode(address, (error, { latitude, longitude, label } = {}) => {
        if (error) {
            return res.send(error)
        }

        forcast(latitude, longitude, (error, { des, temp, time } = {}) => {
            if (error) {
                return res.send(error)
            }
            res.send({
                location: label,
                descibtion: des,
                temprature: temp,
                time: time,
                address: req.query.address
            })


        })


    });


})


app.get('/help/*', (req, res) => {
    res.render("error", {
        message: "help article not found",
        title: "help"
    })
})

app.get('*', (req, res) => {
    res.render("error", {
        message: "404 page not found",
        title: "help"
    })
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})