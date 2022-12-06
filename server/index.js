require("dotenv").config();
const app = require("./app");


app.listen(process.env.ECPORT, ()=>{
    console.log(`server log running on port: ${process.env.ECPORT} the URL:${process.env.ETURL}`)
});