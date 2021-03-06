var express = require('express');
var app = express();

var port = process.env.PORT; //Use for could9 autoassign port

app.use(express.static('public'));  //Look first in static content
app.use(express.static('src/views'));  //Second static dir 
app.use(express.static('bower_components'));


app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
   //res.send(index.html); 
   res.render('index', { 
       nav: [
            {Link: 'Services', Text: 'Resume'},
            {Link: 'Portfolio', Text: 'Projects'},
            {Link: 'About', Text: 'About'},
            {Link: 'Team', Text: 'Games'},
            {Link: 'Contact', Text: 'Contact'}]
   });
});

app.get('/mochi', function(req, res){
   res.send("Lovvin it."); 
});

app.listen(port, function(err){
    console.log("The server is running on port: " + port);
});

