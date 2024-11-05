const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));



let posts = [
    {
        userName : "satyam",
        content : "i love coding"
    },
    {
        userName : "shivam",
        content : "shivam loves swim"
    },
    {
        userName : "shubham",
        content : "shubham loves study"
    },
];




app.get("/posts",(req,res) => {
    res.render("index.ejs",{ posts });
});


app.get("/posts/new" ,(req,res) => {
    res.render("toAddNewPost.ejs");
});

app.post("/posts",(req,res) =>{
    console.log(req.body);
    let { userName, content } = req.body;

    posts.push({userName,content});

    res.redirect("/posts");
});

app.listen(port,() => {
    console.log("Listening on port : 8080");
});