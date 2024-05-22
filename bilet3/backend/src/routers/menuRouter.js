import express from "express"
import { addMenu, deletetMenuById, getAllMenu, getMenuById, patchMenuById, putMenuById } from "../controllers/menuController.js"

const menuRouter = express.Router()

menuRouter.get("/", getAllMenu)
menuRouter.post("/", addMenu)
menuRouter.get("/:id", getMenuById )
menuRouter.delete("/:id", deletetMenuById)
menuRouter.patch("/:id", patchMenuById)
menuRouter.put("/:id", putMenuById)

export default menuRouter