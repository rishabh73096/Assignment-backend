import express from "express";
import dotenv from "dotenv";
import fs from 'fs';
import cors from "cors";

const serverapp = express();
const items = JSON.parse(fs.readFileSync('./Mock-data.json', 'utf8'));
serverapp.use(cors());

dotenv.config();
serverapp.use(express.json());
serverapp.use(express.urlencoded({ extended: true }));
serverapp.use(express.static("public"));

// get the all items
serverapp.get("/api", (req, res) => {
    console.log(res);
    return res.send(items)
});

// add new item in the mock-data.json file
serverapp.post('/api/additems', (req, res) => {
    const body = req.body;
    items.push({ ...body, id: items.length + 1 });
    fs.writeFileSync('./Mock-data.json', JSON.stringify(items), (err, data) => {
        return res.json({ status: "Sucess" })
    })
});

// Delete an item in mock-data.json using id
serverapp.delete('/api/deleteitems/:id', (req, res) => {

    const {id }= req.params;
    const itemIndex = items.findIndex(item => item.id === parseInt(id, 10));

    if (itemIndex === -1) {
        res.status(404).json({ 
            status: "Error", 
            message: "Item not found" 
        });
        return; 
    }
    items.splice(itemIndex, 1);
    fs.writeFileSync('./Mock-data.json', JSON.stringify(items, null, 2));
    res.json({ 
        status: "Success", 
        message: `Item with ID ${id} deleted successfully` 
    });
});

//
serverapp.put('/api/edititems/:id', (req, res) => {
    const id = parseInt(req.params.id, 10); 
    const updatedData = req.body; 

    const itemIndex = items.findIndex(item => item.id === id);

    if (itemIndex === -1) {
        res.status(404).json({
            status: "Error",
            message: "Item not found",
        });
        return;
    }

    items[itemIndex] = { ...items[itemIndex], ...updatedData };

    fs.writeFileSync('./Mock-data.json', JSON.stringify(items, null, 2));

    res.json({
        status: "Success",
        message: `Item with ID ${id} updated successfully`,
        updatedItem: items[itemIndex],
    });
});






const PORT = process.env.PORT || 3200;
serverapp.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
