const mongoose = require('mongoose')

const  reviewSchema = new mongoose.Schema({

    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },

      review: {
        type: String,
        required: true,
      },

      status: {
        type: String,
        required: true,
      }

},{ timestamps: true })

module.exports = mongoose.Schema('Reviews',reviewSchema)