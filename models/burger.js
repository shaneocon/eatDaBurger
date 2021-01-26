const orm = require("../config/orm.js");

const burger = {
   all: (callback) => {
       orm.selectAll("burgers", function(res) {
           callback(res);
       });
   },

 create: (table, newRowData, callback) => {
     orm.insertBurger("burgers", table, newRowData, function(res) {
         callback(res);
     })
 },
 
 update: (table, updateValues, condition, callback) => {
     orm.updateBurger("burgers", table, updateValues, condition, function(res) {
        callback(res);
     });
 }

};



module.exports = burger;
