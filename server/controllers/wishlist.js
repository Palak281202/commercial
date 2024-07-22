import { WishListItem } from "../models/wishlistItem.js";
import { success } from "../utils/response.js";

export const addItem = async (req, res, next) => {
  try {
    const data = req.body;

    const foundItem = await WishListItem.findOne({ id: data.id });

    if (foundItem) {
      const result = await WishListItem.deleteOne({ id: data.id });

      return res
        .status(201)
        .json(success(201, { message: "Registration Successful" }));
    }
    const newItem = new WishListItem(data);
    const userData = await newItem.save();
    console.log(userData);
    return res
      .status(201)
      .json(
        success(201, { message: "Registration Successful", item: userData })
      );
  } catch (err) {
    next(err);
  }
};
