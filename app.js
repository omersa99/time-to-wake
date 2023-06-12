const express = require("express")
const mongoose = require("mongoose")
const alarmRoutes = require("./routes/alarmRoutes")

// Create Express app
const app = express()

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
app.use("/api/alarm", alarmRoutes)

// Start the server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
