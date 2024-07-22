import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const WishListItem = mongoose.model("Wish", itemSchema);
