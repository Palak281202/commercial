import { config } from "../config/appConfig.js";

export const getAcessTokenSecret = () => {
    if(!config.ACCESS_TOKEN_SECRET){
        const err = new Error("Access Token Secret not set");
        err.status = 500;
        throw err;
        // throw new Error("Access Token Secret not set");
    }
    
    return config.ACCESS_TOKEN_SECRET;
}
