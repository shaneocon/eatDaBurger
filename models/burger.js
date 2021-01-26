const orm = require("../config/orm.js");

const burger = {
   all: (callback) => {
       orm.selectAll("burgers", function(res) {
           callback(res);
       });
   },
   
// create: insertOne()
// update: updateOne()
};



module.exports = burger;
