const express = require('express');
require('dotenv').config();
const connection = require('./connection.js');

const path = require('path');
const cookieParser = require('cookie-parser');

const { restrictToLoggedinUserOnly , checkAuth } = require('./Middleware/auth.js');

const userroutes = require('./Router/userroutes.js');
const urlroutes = require('./Router/urlroutes.js');
const staticroutes=require('./Router/staticrouter.js')

const app = express();

connection()
    .then(() => {
        console.log('connected with database');
    })
    .catch(() => {
    console.log('error connecting to db!')
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.resolve('./Views'))

app.use('/user', userroutes); 
app.use('/url',restrictToLoggedinUserOnly, urlroutes);
app.use('/', checkAuth, staticroutes);
 
// app.get('/test', async (req, res) => {
//     const allurls = await URL.find({});
//     return res.render('home',{urls: allurls});
// })


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server listening on PORT ${port}`)
})
