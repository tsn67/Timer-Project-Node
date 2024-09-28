import express from "express"

const app = express();
const port = 3000;

//let the express to identify the folder containing static files (css files)
app.use(express.static('public'))

app.listen(port, () => {
    console.log("The server started at port "+port);

});

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/test", (req, res) =>  {
    res.redirect("/");
})