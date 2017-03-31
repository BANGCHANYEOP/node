var express = require("express")
app = express();

app.set("port" , (5000));
app.listen(app.get("port") , 
  function(){ 
   console.log("APP IS RUNNING ON ["+ app.get("port") +"]");
 });
 app.get("/" , function(req , res)
 { res.send("Hello World!"); 
 });