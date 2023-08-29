import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
        maxlength: [60, "Title cannot be more than 60 characters"],
    },
    desc: {
        type: String,
        required: [true, "Please provide a description"],
        maxlength: [200, "Description cannot be more than 200 characters"],
    },
    img: {
        type: String,
        required: [true, "Please provide an image"],
    },
    prices: {
        type: [Number],
        required: [true, "Please provide a price"],
    },
    extraOptions: {
        type: [
            {
                text: { type: String, required: [true, "Please provide a type"] },
                price: { type: Number, required: [true, "Please provide a price"] },
            },
        ],
    },
},
    { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema); 