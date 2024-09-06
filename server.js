/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const app = express()
const env = require("dotenv").config()
const expressLayouts = require("express-ejs-layouts")
const bodyParser = require("body-parser")
const HOST = 'localhost'
const PORT = 3000

/* ***********************
 * Routes
 *************************/

app.get("/", (req, res) => {res.send("Welcome home!")})




/* ***********************
* Log statement to confirm server operation
* *********************** */
app.listen(PORT, () => {
    console.log(`trial app listening on ${HOST}:${PORT}`)
    })