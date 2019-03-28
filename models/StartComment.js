const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const StartCommentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StartPost",
        required: true
    },
    commentedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("StartComment", StartCommentSchema);