import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: [true, "Please provide a Customer"],
        maxlength: [60, "Customer cannot be more than 60 characters"],
    },
    address: {
        type: String,
        required: [true, "Please provide a Address"],
        maxlength: [200, "Address cannot be more than 200 characters"],
    },
    total: {
        type: [Number],
        default: 0,
    },
    status: {
        type: Number,
        required: [true, "Please provide a status"],
    },
    method: {
        type: Number,
        required: [true, "Please provide a method"],
    },
},
    { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema); 