const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const rateLimit = require('express-rate-limit');
const config = require('./config');
const auth = require('./routes/auth');
const billing = require('./routes/billing');

const app = express();
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use('/static', express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: config.SESSION_SECRET, resave:false, saveUninitialized:false }));
app.use(flash());
app.use(rateLimit({ windowMs: 15*60*1000, max: 100 }));

app.use('/', auth);
app.use('/billing', billing);

app.get('/', (req,res)=> res.redirect('/login'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log('Render panel listening on', PORT));
