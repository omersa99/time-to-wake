// import cors from "cors"
import express from "express"
// import bodyParser from 'body-parser';
import mongoose from "mongoose"
import cors from "cors"
// const express = require("express")
// const mongoose = require("mongoose")
import routerx from "./routes/alarmRoutes.js"

// Create Express app
const app = express()
app.use(cors())
// Connect to MongoDB
//ToDO: connect=> .env file when deployed
mongoose
  .connect(
    "mongodb+srv://admin:8oPvqeImqFtZ70Lv@cluster0.ie6rnc3.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error)
  })

// Middleware
app.use(express.json())

// Routes
app.use("/api/alarm", routerx)

// Start the server
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
