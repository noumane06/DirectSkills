import dotenv from "dotenv";
import http from "http";
import app from "./server";

dotenv.config();

// Start the application by listening to specific port
const port = Number(process.env.PORT || 8080);

// ********************************

// Running the server
app.set("port", port);
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
