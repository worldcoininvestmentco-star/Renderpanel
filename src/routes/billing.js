const express = require('express');
const router = express.Router();
const db = require('../db')();

router.get('/plans', (req,res)=>{
  db.all('SELECT * FROM plans', [], (err, rows)=> res.render('plans', { plans: rows || [] }));
});

module.exports = router;
