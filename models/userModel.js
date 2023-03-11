const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    type: {
      type: String,
      required: [true, 'Please add an type']
    },
    problem: {
      type: String,
      required: [true, 'Please add an problem']
    },
    location: {
      lat: {
        type: Number,
      required: [true, 'Please add an lat']
      },
      long: {
         type: Number,
      required: [true, 'Please add an long']
      }
     
      
    }
  }
)

module.exports = mongoose.model('Hire', userSchema)
