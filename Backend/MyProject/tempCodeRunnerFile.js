const figlet = require("figlet");

figlet("Satyam",function(err,data){

    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});