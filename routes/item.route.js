import express, { Router } from "express";
import { createItem, deleteItem, editItem, getAllItems } from "../controllers/item.controller.js";

const itemrouter = express.Router();

itemrouter.get("/items",getAllItems)
itemrouter.get("/createitem",createItem)
itemrouter.get("/edit",editItem)
itemrouter.get("/delete",deleteItem)

export default itemrouter