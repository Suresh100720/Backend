import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  skill: {
    type: String,
    required: false
  }
});

/* Virtual */
candidateSchema.virtual("info").get(function () {
  return this.name + " - " + this.skill;
});

/* Pre-save hook */
candidateSchema.pre("save", function(next) {
  console.log("Saving candidate...");
});

export default mongoose.model("Candidate", candidateSchema);