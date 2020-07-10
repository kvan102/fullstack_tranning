var express = require("express")
var bodyParser = require("body-parser")

var tasks = require("./routes/tasks")
var cors = require("cors")

var port = 3000 

var app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use("/api",tasks)
/* const Sequelize = require('sequelize')

* const db = new Sequelize('task','root','password',{
*     host: 'localhost',
*     dialect: 'mysql',
*     peratorAliases: false,

* });
* const result = db.query("SELECT * from tbl_tasks").then(results => {
*     console.log(results);
* });
* db
*   .authenticate()
*   .then(() => {
*     var sql = "SELECT * FROM tasks VALUES";
*     console.log('Connection has been established successfully.');
*   })
*   .catch(err => {
*     console.error('Unable to connect to the database:', err);
*   });
*/

app.listen(port, function() { 
    console.log('Server started on port' + port)
})