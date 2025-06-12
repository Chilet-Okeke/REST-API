/* API will run CRUD
 Create,retrievw, update, delete basic API calls 
 CREATE --> POST
 Retrieve --> GET
 UPDATE --> PUT
 DELETE --> DELETE
 */
import arrayList from "./data/index.js";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
// const express = require('express')
const app = express();
const PORT = process.env.PORT; /* || 3000 - env port set to 3000 */

app.use(express.json());
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

// Create a new item in the list
app.post("/api/arrayList", (req, res) => {
  const { Name, Culture, Food, Drink, Amount, Religion } = req.body;

  if (!Name || !Culture || !Food || !Drink || !Amount || !Religion) {
    return res.status(400).json({ message: "All fields are required" });
  }
    const newItem = { Name, Culture, Food, Drink, Amount, Religion };
    
    arrayList.push(newItem)
    res.status(201).json(newItem)
});

// Get all items in the array
app.get("/api/arrayList", (req, res) => {
  res.json(arrayList);
});

// Get single item from the array
app.get("/api/arrayList/:Name", (req, res) => {
  const Name = req.params.Name;
  const List = arrayList.find((t) => t.Name === Name);

  if (List) {
    res.json(List);
  } else {
    res.status(404).json({ message: "item not found" });
  }
});

// Update

//  Delete
