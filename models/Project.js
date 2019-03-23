
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  githubRepo: {
    type: String,
    required: true
  },
  deployLink: {
    type: String,
    required: true
  },
  screenshot: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  username: {
    type: String
  }
});

module.exports = mongoose.model("Project", ProjectSchema);
