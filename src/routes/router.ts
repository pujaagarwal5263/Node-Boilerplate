import Express from "express";
import { Request, Response } from "express";

const { getData }  = require("../controllers/controller");

var router = Express.Router();

router.get("/",getData);

module.exports = router;