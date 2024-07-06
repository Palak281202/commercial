// starting the server
import app from "./app.js";
import { config } from "./config/appConfig.js";

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port`, PORT);
});