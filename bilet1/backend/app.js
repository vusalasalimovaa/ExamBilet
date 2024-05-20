import express from "express"
import "dotenv/config"
import "./src/config/dbConnection.js"
import productRouter from "./src/routers/productsRouter.js"

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5001

app.get("/",(req,res) => {
  res.send("Bilet 1")
})

app.use("/api/products", productRouter)

app.listen(PORT, () => {
  console.log(`Server listen ${PORT}`)
})