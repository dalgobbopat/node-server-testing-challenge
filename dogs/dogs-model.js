const db = require('../data/dbconfig.js');

function find() {
    return db("dogs");
}

async function create(data) {
   const [id] = await db("dogs").insert(data);
   return findById(id)
}

function remove(id){
   return null;
}


function findById(id) {
    return db("dogs").where("id", id).first();
}



module.exports = {
    find,
    create,
    remove,
    findById,
  };
