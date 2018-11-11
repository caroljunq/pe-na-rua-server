const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// alternatives
// mongodb://localhost:27017/mapa-sanca
mongoose.connect("mongodb://hackathon2018:mobilidade123@ds159273.mlab.com:59273/pe-na-rua", { useNewUrlParser: true },function(err){
  if(err){
    console.log(err);
  }
});
