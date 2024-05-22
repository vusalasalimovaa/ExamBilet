import express from "express"
import "dotenv/config"
import "./src/config/dbConnection.js"
import menuRouter from "./src/routers/menuRouter.js"

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5001

app.get("/", (req,res) => {
    res.send("Hello bilet3")
})

app.use("/api/menu", menuRouter)

app.listen(PORT, () => {
    console.log(`Server listen ${PORT}`)
})