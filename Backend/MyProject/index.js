const figlet = require("figlet");

figlet("Satyam",function(err,data){

    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});

// const joke = require("give-me-a-joke");

// joke.getRandomJoke("programming", function(err, data) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });

