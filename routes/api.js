const express= require('express');
const app = express();
const router = express.Router();
const Activity = require('../models/activity');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/activities', function (req, res) {
  Activity.find().then(function (err, activity) {
    if (err) {
      res.send(err);
    }
    res.json(activity);
  })
})

router.post('/activities', function (req, res) {
  const newActivity = new Activity(req.body);
  newActivity.save(function (err, activity) {
    if (err) {
      res.send(err);
    }
    res.json(activity);
  })
})

router.get('/actvities/:id', function (req, res) {
  id = req.params.id;
  Activity.findOne({_id: id}).then(function (err, activity) {
    if (err) {
      res.send(err);
    }
    res.json(activity);
  })
})

router.put('actvities/:id', function (req, res) {
  id = req.params.id;
  Activity.findOneAndUpdate({_id: id}).then(function (err, activity) {
    if (err) {
      res.send(err);
    }
    res.json(activity);
  })
})

router.delete('actvities/:id', function (req, res) {
  id = req.params.id;
  Activity.remove({_id: id}).then(function (err, activity) {
    if (err) {
      res.send(err);
    }
    res.json({message: 'Task deleted. '});
  })
})

router.post('/activities/:id/stats', function (req, res) {

})

router.delete('/stats/:id', function (req, res) {

})

module.exports = router;