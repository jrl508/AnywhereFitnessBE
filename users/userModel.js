const db = require('../data/dbConfig');

module.exports = {
  add,
  addClass,
  find,
  findBy,
  findById,
};

function find() {
  return db('users').select('id', 'username', 'password', 'isTrainer');
}

function findBy(filter) {
  return db('users').where(filter);
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function addClass(post) {
    return db('classes')
      .insert(post, 'id')
      .then(ids => {
        const [id] = ids;
        return findById(id);
      });
  }
  

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}