import { Schema, model } from 'mongoose';


const schema_cars = new Schema({
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    status: {
        type: Boolean
    },
    buyValue: {
        type: Number
    },
    doorsQty: {
        type: Number
    },
    seatsQty: {
        type: Number
    },

});

export default model('cars', schema_cars);