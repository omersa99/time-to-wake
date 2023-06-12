import mongoose from "mongoose"
const alarmSchema = new mongoose.Schema({
  alarmTime: { type: Date, required: true },
})

// module.exports = mongoose.model("Alarm", alarmSchema)

var alarmTime = mongoose.model("Alarm", alarmSchema)
export default alarmTime
