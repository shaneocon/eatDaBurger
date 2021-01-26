const connection = require("../config/connection.js");

const orm = {
    selectAll: (tableInput, callback) => {
        const getAll = "SELECT * FROM ??";
            connection.query(getAll, [tableInput], (error, result) => {
                if (error) {
                    console.log(error);
                }
                callback(result);
            });
    },

    // insertOne: ()

}

module.exports = orm;

// updateOne()