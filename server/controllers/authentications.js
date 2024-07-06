import { User } from "../models/user.js";
import { loginValidationSchema } from "../validations/schemas.js";
import { generateAccessToken } from "../middlewares/auth.js";
import { success } from "../utils/response.js";

export const register = async (req, res, next) => {
  try {
    const data = req.body;

    const foundUser = await User.findOne({ email: data.email });

    if (foundUser) {
      return next({ status: 409, message: "User already registered" });
    }

    const newUser = new User(data);
    const userData = await newUser.save();

    return res
      .status(201)
      .json(success(201, { message: "Registration Successful" }));
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    // joi validation
    const { error } = loginValidationSchema.validate(req.body);
    if (error) {
      return next({ status: 400, message: error.details[0].message });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return next({ status: 400, message: "Incorrect email or password" });
    }

    const payload = {
      id: user.id.toString(),
      email: email,
    };

    const accessToken = generateAccessToken(payload);

    // return res.status(200).json({token: accessToken});
    return res
      .status(200)
      .json(success(200, { token: accessToken, message: "Login Successful" }));
  } catch (error) {
    next(error);
  }
};
