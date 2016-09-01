var knex = require('./knex');

function Houses() {
  return knex('houses');
}

function Students(){
  return knex('students');
}

function Professors(){
  return knex('professors').where('id', '<', 14);
}

function insertNewStudent(name, house_id, year, patronus){
  return Students().insert({
    name: name,
    house_id: house_id,
    year: year,
    patronus: patronus
  })
}

function updateStudentPatronus(patronus, name){
  return Students()
    .update({
      patronus: patronus
  })
    .where('name', name);
}

module.exports = {
  getAllHouses: Houses,
  getAllStudents: Students,
  getAllProfessors: Professors,
  insertNewStudent: insertNewStudent,
  updateStudentPatronus: updateStudentPatronus,
  getStudentByName: function(name){
    return Students().where('name', name);
  }
};
