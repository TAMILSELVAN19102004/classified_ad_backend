
import mongoose, { Schema } from 'mongoose';

const mobileAdSchema = new Schema({
    brand: String,
    model: String,
    year: Number,
    condition: String,
    storage: String,
    color: String,
    adTitle: String,
    description: String,
    price: Number,
    photos: String,
    category: String,
        
});

const MobileAd = mongoose.model('MobileAd', mobileAdSchema);

export default MobileAd;