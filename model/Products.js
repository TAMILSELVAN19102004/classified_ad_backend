import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    }
});
export const product = mongoose.model('Products',ProductSchema);
