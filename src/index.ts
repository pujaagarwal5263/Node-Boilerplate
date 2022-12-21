import  Express from "express";
import bodyParser from "body-parser";

const app=Express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const routes = require("./routes/router");
app.use("/", routes);

app.listen(3000,()=>{
    console.log("server is running");
})


