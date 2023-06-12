import express from "express"

// const Alarm = require("../models/alarmModel")
import alarmTime from "../models/alarmModel.js"

const router = express.Router()

// Create a new alarm
router.post("/", async (req, res) => {
  const alarmTimeData = req.body.alarmTime
  // console.log(alarmTimeData)

  try {
    //     const alarm = await alarmTime.create({ alarmTime })
    const newAlarm = new alarmTime({ alarmTime: alarmTimeData })
    newAlarm.save()
    res.status(201).json(newAlarm)
  } catch (error) {
    console.error("Error creating alarm:", error)
    res.status(500).json({ error: "Error creating alarm" })
  }
})

// Retrieve all alarms
router.get("/", async (req, res) => {
  try {
    const alarms = await alarmTime.find()
    res.status(200).json(alarms)
  } catch (error) {
    console.error("Error retrieving alarms:", error)
    res.status(500).json({ error: "Error retrieving alarms" })
  }
})

export default router
