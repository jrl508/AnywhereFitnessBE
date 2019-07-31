const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findByType,
  findById,
};

function find() {
  return db('classes');
}

function findByType(type) {
  return db('classes').where({ type });
}

function add(newClass) {
  return db('classes')
    .insert(newClass, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db('classes')
    .where({ id })
    .first();
}