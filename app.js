const express = require("express");
const ejs = require("ejs");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

const passport = require('passport');
const flash = require('connect-flash');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const configDB = require('./controllers/database.js');
let dbURI = configDB.url;
// ====================== connect to database ======================
// mongoose.connect(configDB.url, { useNewUrlParser: true });

// pass passport for configuration
const passportController = require('./controllers/passport');
passportController(passport);

// set up ejs for templating
app.set('view engine', 'ejs');

// set up express application
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./"));
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}
mongoose.connect(dbURI, { useNewUrlParser: true });

// required for passport
app.use(session({
    secret: 'ilovescotchscotherochyscotchscotch', // session secret
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// load our routes and pass in our app and fully configured passport
const router = require('./routes/routes.js');
router(app, passport);

// ====================== launch server ======================
app.listen(port, () => {
    console.log(`Server ist running on port ${5000}`);
});
