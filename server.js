const colors = require("colors");
const app = require('./app');
const { connect } = require('./mongo');
require("dotenv").config()

app.listen(process.env.PORT, async () => {
    console.log(`Listening on port ${process.env.PORT}`.bgGreen);
    await connect()
    console.log("Connected to mongodb".bgRed);
})