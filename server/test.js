var models = require('./server.js').models;
/*
var toSave = [
    {name: 'yoges', email: 'u@getCoedStyle.com'},
    {name: 'yoes', email: 'u@getCoedStyle.com'},
    {name: 'yoges', email: 'u@getCedStyle.com'},
    {name: 'yogs', email: 'u@getCedStyle.com'},
    {name: 'yges', email: 'u@getCoeStyle.com'},
    {name: 'yoge', email: 'u@getoedStyle.com'},
];

toSave.map(obj => {
  models.Profile.create(obj, (err, created) =>{
    console.log('Created?', created);
  });
});
*/

var filter = {
  where: {
    name: 'yoges'
  },
  order: 'id ASC',
  limit: 3,
};

models.Profile.find(filter, (err, found) =>{
  console.log('Found?', err, found);
});
