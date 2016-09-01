var express = require('express');
var router = express.Router();
var query = require('../database/query');

/* GET home page. */
router.get('/', function(req, res, next) {
  query.getAllHouses()
  .then(function(data){
    res.send(data);
  })
  .catch(function(err){
    return next(err);
  })
});
router.get('/students', function(req, res, next) {
  query.getAllStudents()
  .then(function(data){
    res.send(data);
  })
  .catch(function(err){
    return next(err);
  })
});
router.get('/professors', function(req, res, next) {
  query.getAllProfessors()
  .then(function(data){
    res.send(data);
  })
  .catch(function(err){
    return next(err);
  })
});

router.get('/students/:name', function(req, res, next) {
  query.getStudentByName(req.params.name)
  .then(function(data){
    res.render('student', {
      data: data[0]
    });
  })
  .catch(function(err){
    return next(err);
  })
});


router.get('/newstudent/:name/:house_id/:year/:patronus',
  function(req, res, next){
    var name = req.params.name,
        house_id = req.params.house_id,
        year = req.params.year,
        patronus = req.params.patronus;

        query.insertNewStudent(name, house_id, year, patronus)
        .then(function(){
          res.redirect('/')
        })
        .catch(function(err){
          return next(err);
        })
  })


  router.get('/patronus/new/:patronus/:name',
    function(req, res, next){
      var patronus = req.params.patronus,
          name = req.params.name;
      query.updateStudentPatronus(patronus, name)
      .then(function(){
        res.redirect('/students');
      })
      .catch(function(err){
        return next(err);
      })
    })

module.exports = router;
