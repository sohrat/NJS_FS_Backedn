const http = require("http");
require('dotenv').config();

http.createServer().listen(process.env.port, () => {
    console.log(`Server is Running on port: ${process.env.port}`);
});