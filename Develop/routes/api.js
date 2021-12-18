const router = require("express").Router();
const router = require("express");
const workout = require("../models/workout.js");

//post 
router.post(`/`, (req, res) =>{
    workout.create(req.body)
    .then(dbExcerise => {
      res.json(dbExcerise);
  }).catch(err => {
    res.status(400).json(err);
  });
});

//put

router.put ("/:id", (req, res) => {
    workout.findOneAndUpdate (
      {"_id": req.params.id},
      {$push: {"excerise":req.body}},
      {new:true},
      
    ).then(dbExcerise => {
      res.json(dbExcerise);
  
    }).catch(err => {
      res.status(400).json(err);
    })
  }),

  //get



  //delete
  router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndRemove(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.status(400).json(err);
        });










  router.get("/workouts/range", (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {$sum: "$exercises.duration"},
          totalWeight: {$sum: "$exercises.weight"},
        },
      }
      
    ])};
