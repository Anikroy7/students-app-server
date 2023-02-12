const colors = require("colors");
const app = require('./app');
const { connect } = require('./mongo');

require("dotenv").config()

const setUp = () => {
    const { setupRoutes } = require("./students.controller")
    setupRoutes(app)
}


app.listen(process.env.PORT, async () => {
    console.log(`Listening on port ${process.env.PORT}`.bgGreen);
    await connect()
    setUp()
    console.log("Application setup completed".bgRed.white);
})