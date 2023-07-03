const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let item = ["Buy Food", "Cook Food", "Have it"];

app.get("/", function (req, res) {
    let today = new Date();
    let Currday = today.getDay();
    let day = "";

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    day = today.toLocaleDateString("en-US", options);

    res.render("list", { kindOfDay: day, newItem: item });
});

app.post("/", function (req, res) {
    item.push(req.body.addItem);

    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server is up");
});

