// // console.log("hello");
//  const fs = require('fs');
// const { type } = require('os');
// const { json } = require('stream/consumers');
// // const data = fs.readFileSync('../1.txt',{encoding:"utf8"});
//  const dataJson = fs.readFileSync('./db.json',{encoding:"utf8"});
// // console.log(Date.now());
// var dbPath = "./db.json";
//  var db = require(dbPath);
// // console.log(dataJson)
// // const [ , , , name, age] = [, , , ,"ali"  , ,]
// // console.log(process.argv)
// var dbString = fs.readFileSync(dbPath,'utf8') || [];
// const db = JSON.stringify(dbString);
// db.push({
//     name:"Ali",age:20
// });
// fs.writeFileSync('./db.json',JSON.stringify(db),'utf8')
// // console.log(dataJson ,typeof dataJson)
// // console.log(db ,typeof db)


// console.log("ALl is well ")
// const express= require("express");
// const app = express();
// // app.listen(my port as a number, call back fn to run after server)
// app.listen(2000,()=>console.log("Server Run Successfully"))
// const {ali,ahmed,mohamed,secret} = require('./4-names.js'); 
// const sayHi = require('./utils')
// // sayHi(ali)
// // sayHi(mohamed)
// // sayHi("hassan")
// // console.log(secret);

// const flavs = require('./flavors')
// console.log(flavs)

const _ = require('lodash')
const arr = [1,[2,[3,4,[5,6,[7,8]]]]]
const items = _.flattenDeep(arr)
console.log(items);


