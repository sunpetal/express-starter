const serverless = require("serverless-http");
const app = require("../../dist/main").default; // adjust if your outDir or filename differs

module.exports.handler = serverless(app);
