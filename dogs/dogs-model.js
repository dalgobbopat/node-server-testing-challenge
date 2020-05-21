const db = require('../data/dbconfig.js');

function find() {
    return db("dogs");
}

module.exports = {
    find,
};