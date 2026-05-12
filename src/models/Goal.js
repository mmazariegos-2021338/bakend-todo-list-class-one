const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'title es requerido'],
      trim: true
    },
    description: {
      type: String,
      default: '',
      trim: true
    },
    targetDate: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Goal', goalSchema);
