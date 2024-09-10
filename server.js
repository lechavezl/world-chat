/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const app = express()
const env = require("dotenv").config()
const expressLayouts = require("express-ejs-layouts")
const bodyParser = require("body-parser")
const static = require("./routes/static")
const HOST = 'localhost'
const PORT = 3000

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout") // not at views root

/* ***********************
 * Routes
 *************************/
app.use(static)

// Log in route - Main Route
app.get("/", (req, res) => {
    res.render("index", {title: "Log In | World Chat"})
})



/* ***********************
* Log statement to confirm server operation
* *********************** */
app.listen(PORT, () => {
    console.log(`trial app listening on ${HOST}:${PORT}`)
    })