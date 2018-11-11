const Coordinate = require('../models/coordinate');
const mongoose = require("mongoose");
var ObjectID = mongoose.Types.ObjectId;

function all(){
  return Coordinate.find();
}

// function updateItem(id,valor){
//   return new Promise((resolve, reject) => {
//     Coordinate.find({_id: new ObjectID(id)})
//       .then(coord =>{
//         console.log("maoee");
//         resolve(coord)
//         // t.save(function (err, updatedTank) {
//         //   if(err){
//         //     reject(err)
//         //   }
//         //   resolve("Deu Certo Atualizar");
//         // });
//       })
//       .catch(err =>{
//         console.log("naoe deuu")
//         reject(err);
//       })
//
//
//       // tank.save(function (err, updatedTank) {
//       //   if(err){
//       //     reject(err)
//       //   }
//       //   resolve("Deu Certo Atualizar");
//       // });
//   });
// }

module.exports.all = all;
// module.exports.updateItem = updateItem;
