require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');

const logger = require('morgan');
const path = require('path');
const session = require("express-session")
const MongoStore = require("connect-mongo")(session)
const flash = require("connect-flash");
//cambiar variable de entorno de DB
//mongodb+srv://dieglitter:123@cluster0.bido3.mongodb.net/taby-app?retryWrites=true&w=majority
mongoose
    .connect('mongodb://localhost/tabytest', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo Atlas! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



// Express View engine setup

app.use(require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    sourceMap: true
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'TABY - Track A Better You';

//sessiones 

app.use(
    session({
        secret: process.env.SECRET,
        // Este par de opciones son las que nos crean siempre una cookie nueva la primera vez que un user visita nuestro server o una vez que la anterior expira.(o sea manda una cookie si no existe de forma automatica).
        saveUninitialized: true,
        resave: false,
        cookie: { maxAge: 600000 },
        store: new MongoStore({
            mongooseConnection: mongoose.connection,
            ttl: 60 * 60 * 24 // 60sec * 60min * 24h => 1 day
        })
    })
)


app.use(flash());
require("./passport")(app)
    /* require('./config/session')(app); */


const index = require('./routes/');
app.use('/', index);


app.use("/auth", require("./routes/auth"))

module.exports = app;