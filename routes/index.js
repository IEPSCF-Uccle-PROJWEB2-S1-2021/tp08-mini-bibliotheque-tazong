const express = require('express');
const router = new express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/",(req,res,next) =>{
  const name = req.body.name;
  res.render("bib", {title: `bib ${name}`, name: name});
});
module.exports = router;
