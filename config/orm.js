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
    insertOne: (table, newRowData, callback) => {
        const queryString = "INSERT INTO ?? SET ?";
        const values = [table, newRowData];

        connection.query(queryString, values, (error, result) => {
            if (error) {
                console.log(error);
            }
            callback(result);
        });
    },
    updateOne: (table, updateValues, condition, callback) => {
        const queryString = "UPDATE ?? SET ? WHERE ? LIMIT 1";
        const values = [table, updateValues, condition];

        console.log(queryString);
        const query = connection.query(queryString, values, (error, result) => {
            if (error) {
                console.log(error);
            }
            callback(result);
        });
        console.log(query.sql);
    }

}

module.exports = orm;

