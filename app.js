var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server started on the port: ' + port + '!');
}); 


