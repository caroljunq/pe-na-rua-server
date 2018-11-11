const db = require("./db-connection.js");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mapCtrl = require("./controllers/map-controller");

app.set('view engine','ejs');
app.use('/public', express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req,res){
  mapCtrl.all()
  .then((coordinates) => {
    res.render('map',{results: coordinates});
  })
  .catch((err) =>{
    res.send("Banco de dados deu problema");
  });
})


app.post('/post-update', function(req,res){
    mapCtrl.updateItem(req.body)
  .then(() => {
    res.redirect("/");
  })
  .catch((err) =>{
    res.send("Deu ruim ao dar update!!");
  });
})

app.listen(3000,function(){
  console.log("Ouvindo a porta 3000!");
})
