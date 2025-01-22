const express=require("express")
const app=express() 
const taskRoutes=require("./routes/taskRoutes")
const cors = require('cors');
app.use(cors());

app.use(express.json())
app.use("/api",taskRoutes)
const PORT=5000
app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT}`)
})