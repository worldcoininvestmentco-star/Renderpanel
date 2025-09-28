const sqlite3 = require('sqlite3').verbose();
module.exports = function(){
  const db = new sqlite3.Database('./data.sqlite');
  return db;
};
