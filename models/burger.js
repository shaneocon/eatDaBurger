const orm = require("../config/orm.js");

const burger = {
   all: (callback) => {
       orm.selectAll("burgers", function(res) {
           callback(res);
       });
   },

 create: (newBurger, callback) => {
     orm.insertOne("burgers", newBurger, function(res) {
         callback(res);
     })
 },
 
 update: (burgerData, criteria, callback) => {
     orm.updateOne("burgers", burgerData, criteria, function(res) {
        callback(res);
     });
 }

};



module.exports = burger;
