const express = require("express")

const app = express()

//middleware 
app.use(express.json());


//common route
app.use("/", (req, res) => {
    console.log(`request received at ${new Date()}`);
    console.log("req", req.body);
    //console.dir(res);
    res.send(`request received at ${new Date()}`);
});



module.exports = app;