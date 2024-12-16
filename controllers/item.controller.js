import item from "../models/item.model.js"

// Get all items
export const getAllItems = async (req, res) => {
   try {
       const items = await item.find();
       res.status(200).json(items);
   } catch (error) {
       res.status(500).json({ message: "Failed to fetch items", error });
   }
};

// create new item 
export const createItem = async (req, res) => {

   const { productName, image, discountedPercentage, price } = req.body;
   
   try {
       const newItem = new item({
           productName,
           image,
           discountedPercentage,
           price
       });

       await newItem.save();
       res.status(201).json({ message: "Item added successfully" });
   } catch (error) {
       res.status(500).json({ message: "Failed to create item", error });
   }
};

// Edit an item
export const editItem = async (req, res) => {
   const { id } = req.params;
   const { productName, image, discountedPercentage, price } = req.body;

   try {
       const updatedItem = await item.findByIdAndUpdate(
           id,
           { productName, image, discountedPercentage, price },
           { new: true } 
       );

       if (!updatedItem) {
           return res.status(404).json({ message: "Item not found" });
       }

       res.status(200).json(updatedItem);
   } catch (error) {
       res.status(500).json({ message: "Failed to update item", error });
   }
};

// Delete an item
export const deleteItem = async (req, res) => {
   const { id } = req.params;

   try {
       const deletedItem = await item.findByIdAndDelete(id);

       if (!deletedItem) {
           return res.status(404).json({ message: "Item not found" });
       }

       res.status(200).json({ message: "Item deleted successfully" });
   } catch (error) {
       res.status(500).json({ message: "Failed to delete item", error });
   }
};