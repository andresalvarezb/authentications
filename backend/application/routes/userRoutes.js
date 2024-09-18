import express from "express"
import { getAllUsers } from "../controller/userController.js"

export const router = express.Router();

router.get("/", getAllUsers)

