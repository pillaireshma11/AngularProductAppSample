const express = require('express');
const path=require('path');
const port =process.env.PORT ||8080;//https://12factor.net/
const app=express();

const destinationDir=path.join(__dirname,'../dist');
//-----------------------------Hosting from the dist folder which is created by npm build --prod ---------------
app.use(express.static(destinationDir));
console.log('Express hosting',destinationDir);
//-----------------------------Serving index.html ---------------
app.get('*',(req,res)=>
{
   res.sendFile(path.join(_dirname,'../index.html')) ;
});
console.log("Serving the index.html");
//-----------------------------Initialze app and listen to port----------------------------------------------
app.listen(port,()=>console.log("Running the port from 8080",port))