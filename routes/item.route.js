import express, { Router } from "express";
import { createItem, deleteItem, editItem, getAllItems } from "../controllers/item.controller.js";

const itemrouter = express.Router();

itemrouter.get("/items",getAllItems)
itemrouter.post("/items",createItem)
itemrouter.put("/edit:id",editItem)
itemrouter.delete("/delete:id",deleteItem)

export default itemrouter