import { RequestHandler, Response, Request} from "express";

const getData: RequestHandler = (req: Request,res: Response)=>{
  
    return res.json({"temp":2});
  }

module.exports =  { getData } ;