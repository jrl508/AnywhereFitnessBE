const db = require('../data/dbConfig');

module.exports = {
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

function findById(id) {
  return db('classes')
    .where({ id })
    .first();
}