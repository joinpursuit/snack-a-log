

const express = require('express');
const cors = require('cors')
const app = express();


app.use(cors())
app.use(express.json())



const snackController = require('./controllers/snackController')
app.use('/snacks', snackController);

app.get('/',(request,response)=>{
  response.send(`Get Snack'n at Snack-a-log!`)
})

app.get("*",(request,response) => {
  response.status(404).send('Page not found - this is from app.js on line 26')
})

// EXPORT
module.exports = app;
