import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    planId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Plan',
    },
    paymentIntentId: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    paymentMethod:{
        type: String,
        default: 'card',
    },
    status:{
        type: String,
        required: true,
    },
    receipt: {
        type: String,
        default: '',
    }
},{
    timestamps: true,
})

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;