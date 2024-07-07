import { CartItem } from "../models/cartItem.js";
import { success } from "../utils/response.js";

export const addItem = async (req, res, next) => {
  try {
    const data = req.body;

    const foundItem = await CartItem.findOne({ id: data.id });

    if (foundItem) {
      // console.log(foundItem);
      // console.log(foundItem.quantity);
      foundItem.quantity = foundItem.quantity + 1;
      // console.log(foundItem);
      const updateData = await CartItem.updateOne(
        { _id: foundItem._id },
        { $set: foundItem }
      );
      // console.log("updateDta",updateData);
      const items = await CartItem.find({}, 'name quantity price id');
      // console.log(items);
      return res
        .status(201)
        .json(
          success(201, { message: "Item added succesfully!", item: foundItem, itemsArr: items})
        );
    }
    data.quantity = 1;
    console.log(data);
    const newItem = new CartItem(data);
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

export const removeItem = async (req, res, next) => {
  try {
    const data = req.body;

    const foundItem = await CartItem.findOne({ name: data.name });

    if (foundItem.quantity > 1) {
      foundItem.quantity--;
      return res
        .status(201)
        .json(success(201, { message: "Item added succesfully!" }));
    }

    const result = await CartItem.deleteOne({ id: data.id });

    return res
      .status(201)
      .json(success(201, { message: "Registration Successful" }));
  } catch (err) {
    next(err);
  }
};
