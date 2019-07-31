
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {id: 1, title: 'Get Ripped', description:'This event will take place in the park and cost $15.00 to participate', type:'Weight Lifting', trainer_id:1},
        {id: 2, title: 'Nirvana Awaits', description:'This event will take place in the park and cost $5.00 to participate', type:'Yoga', trainer_id:1},
        {id: 3, title: 'Billy Blanks Who?', description:'This event will take place in the park and cost $12.00 to participate', type:'Insanity', trainer_id:1},
        {id: 4, title: 'It actually works!', description:'This event will take place in the park and cost $5.00 to participate', type:'Pilates', trainer_id:2},
        {id: 5, title: 'Group long distance jog', description:'This event will take place in the park and cost $0.00 to participate', type:'Cardio', trainer_id:2},
        {id: 6, title: 'Pick things Up and put them Down!', description:'This event will take place in the park and cost $10.00 to participate', type:'Weight Lifting', trainer_id:2},
        {id: 7, title: 'Get ready to sweat!', description:'This event will take place in the park and cost $12.00 to participate', type:'Cardio', trainer_id:3},
        {id: 8, title: 'Hot Yoga', description:'This event will take place in the park and cost $6.00 to participate', type:'Yoga', trainer_id:3},
        {id: 9, title: 'Hotter Yoga', description:'This event will take place in the park and cost $10.00 to participate', type:'Yoga', trainer_id:3}
      ]);
    });
};
