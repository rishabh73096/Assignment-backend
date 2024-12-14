import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountedPercentage: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, 
});

const Item = mongoose.model("Item", userSchema);

export default Item;
