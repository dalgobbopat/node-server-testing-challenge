
exports.seed = async function(knex) {
  await knex("dogs").truncate();
  await knex('dogs').insert([
        { breed:"Beagle", name:"Brady" },
        { breed:"Husky", name:"Thor" },
        { breed:"Pitbull", name:"Rex"}
      ]);
    
};
