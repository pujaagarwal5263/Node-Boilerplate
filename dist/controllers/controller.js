"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getData = (req, res) => {
    // type mytype= String | number ;
    //const arr: mytype[] =[1,2 ,"frh"];
    //defination of function with its types and number of arguments along with return type
    let greet;
    const num1 = 5;
    const num2 = 6;
    //actual working of the function: function definition
    greet = (num1, num2) => {
        return num1 + num2;
    };
    console.log(greet(5, 6));
    return res.json({ "temp": 2 });
};
module.exports = { getData };
