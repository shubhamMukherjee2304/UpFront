const express = require("express");
const app = express();

app.get("/",  function(req, res){
    res.sendFile(__dirname + "/index.html");

})





app.listen(8080, function(){
    console.log("The server is on and running in the port 8080");
})