//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();


const route = require('./routes/route');
var loginController = require('./controller/loginController');
var schoolController = require('./controller/schoolController');
//connect to mongoodb
mongoose.connect('mongodb://localhost:27017/schoolppp');

mongoose.connection.on('connected',()=>{
    console.log('connected');
});

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error in Database connection:' + err);
    }
});

//port no 
const port = 3000;

//addingmiddleware-cors
app.use(cors({origin: 'http://localhost:3001'}));

//body-paser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api',route);
app.use('/user',loginController);
app.use('/school',schoolController);
//testing server
 
app.get('/',(req,res)=>{
    res.send('foobar');
});

app.listen(port,()=>{
    console.log('server started at port : ' + port);
});