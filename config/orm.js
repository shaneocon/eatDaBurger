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
    insertBurger: (table, newRowData, callback) => {
        const insertOne = "INSERT INTO ?? SET ?";
        const values = [table, newRowData];

        connection.query(insertOne, values, (error, result) => {
            if (error) {
                console.log(error);
            }
            callback(result);
        });
    },
    updateBurger: (table, updateValues, condition, callback) => {
        const updateOne = "UPDATE ?? SET ? WHERE ? LIMIT 1";
        const values = [table, updateValues, condition];

        console.log(updateOne);
        connection.query(updateOne, values, (error, result) => {
            if (error) {
                console.log(error);
            }
            callback(result);
        });
    }

}

module.exports = orm;

// updateOne()