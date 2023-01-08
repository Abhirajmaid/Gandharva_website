const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config({path : "./gandharva.env"});

const mongoose = require('mongoose');
const handlebars = require('handlebars');
const bodyparser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

const controller = require('./src/controller/controller');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const port = process.env.PORT || 4080;


require('./src/models/registration');
require('./src/models/sponsers');

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology : true,
    
}).then(()=>console.log("Connected to MongoDB")).catch((err)=>console.log(err));

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, '/views/'));
app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "index", layoutsDir: __dirname + '/views/layouts/', handlebars: allowInsecurePrototypeAccess(handlebars)}));
app.set('view engine', 'hbs');

app.use('/',controller);

app.listen(port,()=>{
    console.log(`listening to port number ${port}`);
})