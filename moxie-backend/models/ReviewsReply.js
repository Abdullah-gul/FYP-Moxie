const mongoose = require('mongoose')

const  reviewReplySchema = new mongoose.Schema({

    Reviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reviews"
    },
    reply: {
        type: String,
        required: true,
    }

},{ timestamps: true })

module.exports = mongoose.Schema('ReviewsReply',reviewReplySchema)