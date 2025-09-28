const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const db = new sqlite3.Database('./data.sqlite');
db.serialize(async ()=>{
  db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT UNIQUE, password TEXT)`);
  db.run(`CREATE TABLE IF NOT EXISTS plans (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, stripePriceId TEXT)`);
  const hashed = await bcrypt.hash('adminpass', 10);
  db.get('SELECT id FROM users WHERE email = ?', ['admin@local'], (e,row)=>{ if(!row) db.run('INSERT INTO users (email,password) VALUES (?,?)',['admin@local',hashed]); });
  console.log('render migrate done');
});
