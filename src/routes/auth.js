const express = require('express');
const router = express.Router();
const db = require('./db')();
const bcrypt = require('bcrypt');

router.get('/login', (req,res)=> res.render('login', { error: req.flash('error') }));
router.post('/login', (req,res)=>{
  const { email, password } = req.body;
  db.get('SELECT * FROM users WHERE email = ?', [email], async (err,user)=>{
    if (!user) { req.flash('error','Invalid'); return res.redirect('/login'); }
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) { req.flash('error','Invalid'); return res.redirect('/login'); }
    req.session.user = {id:user.id, email:user.email};
    res.redirect('/billing/plans');
  });
});

module.exports = router;
