//packages
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

//config
const db = new sqlite3.Database("./db/Shoutbox.db");
const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.get('/', function(req, res) {
  const pageTitle = 'This is a title';

  db.all('SELECT * from shouts', (err, rows) => {
    if(err){
      throw err;
    }

    res.render('pages/index', {
      title: pageTitle,
      data: rows
    });
  });
});

app.get('/add-entry', function(req, res) {
  res.render('pages/add-entry');
});

app.post('/add-entry', function (req, res){
  db.run('INSERT INTO shouts(username, message) VALUES (?, ?);', [req.body.username, req.body.message], err => {
    if(err){
      console.log("Error");
      res.render('pages/add-entry', {hasError: true});
    }

    res.redirect('/');
  });
});

//Run server
const server = app.listen(port, () => {
 console.log(`Server listening on port ${port}…`)
});

module.exports = server;
