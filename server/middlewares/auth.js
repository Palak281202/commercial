import jwt from "jsonwebtoken";
import { getAcessTokenSecret } from "../utils/index.js";

export const authMiddleware = (req, res, next) => {
    
    try {
        // checking for access token in authorization Bearer
        const authHeader = req.headers['authorization'];
        const token = authHeader?.split(' ')[1];
        if(!token){
            return next({status:401, message: "Token not found: Unauthorised access"})
        }
        
        // checking validity of access token and adding payload (user info) to req
        const accessSecret = getAcessTokenSecret();
        const payloadData = jwt.verify(token, accessSecret);
        req.id = payloadData;
        console.log("payloadData: ", payloadData);
        next();
    } catch (err) {
        next(err);
    }
};

export const generateAccessToken = (payload) => {
    try {
        const accessSecret = getAcessTokenSecret();
        return jwt.sign(payload, accessSecret, { expiresIn: '15d' });
    } catch (err) {
        console.error(err);
        throw err;
    }
};
