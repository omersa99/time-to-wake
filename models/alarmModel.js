const mongoose = require("mongoose")

const alarmSchema = new mongoose.Schema({
  alarmTime: { type: Date, required: true },
})

module.exports = mongoose.model("Alarm", alarmSchema)
