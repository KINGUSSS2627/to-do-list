const express = require("express");
const bodyParser = require("body-parser");
let date = require(__dirname + "/date.js");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let item = ["Buy Food", "Cook Food", "Have it"];
let Workitem = [];

app.get("/", function (req, res) {

    let day = date.GetDate();
    res.render("list", { ListTitle: day, newItem: item });
});

app.get("/work",function(req,res){
    res.render("list",{ ListTitle: "Work", newItem: Workitem});
})

app.post("/", function (req, res) {

    if(req.body.list === "Work"){
        Workitem.push(req.body.addItem);
        res.redirect("/work");
    }
    else{
        item.push(req.body.addItem);
        res.redirect("/");
    }
});

app.post("/work",function(req,res){
    Workitem.push(req.body.addItem);
    res.redirect("/work");
});

app.get("/abt",function(req,res){
    res.render("abt");
});

app.listen(3000, function () {
    console.log("Server is up");
});

