const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  activity: {
    type: String,
    required: "Name of activity performed: "
  },
  date_created: {
    type: Date,
    required: true,
    default: Date.now
  },
  count : {
    type: Number,
    required: "Number of times activity performed: ",
    default: 0
  }
})

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;