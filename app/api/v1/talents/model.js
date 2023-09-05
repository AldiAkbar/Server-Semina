const mongoose = require("mongoose");

const talentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Nama harus diisi"],
  },
  role: {
    type: String,
    default: '-',
  },
  // untuk membuat relasi pada mongoDB kita perlu types ObjectId 
  image: {
    type: mongoose.Types.ObjectId,
    ref: 'Image',
    required: true,
  },
  organizer: {
    type: mongoose.Types.ObjectId,
    ref: 'organizer',
    required: true,
  },
},
{ timestamps: true }
);

module.exports = mongoose.model('Talent', talentSchema);
