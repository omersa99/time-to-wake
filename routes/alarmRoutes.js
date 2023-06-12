const express = require("express")
const router = express.Router()
const Alarm = require("../models/alarmModel")

// Create a new alarm
router.post("/", async (req, res) => {
  const { alarmTime } = req.body

  try {
    const alarm = await Alarm.create({ alarmTime })
    res.status(201).json(alarm)
  } catch (error) {
    console.error("Error creating alarm:", error)
    res.status(500).json({ error: "Error creating alarm" })
  }
})

// Retrieve all alarms
router.get("/", async (req, res) => {
  try {
    const alarms = await Alarm.find()
    res.status(200).json(alarms)
  } catch (error) {
    console.error("Error retrieving alarms:", error)
    res.status(500).json({ error: "Error retrieving alarms" })
  }
})

module.exports = router
