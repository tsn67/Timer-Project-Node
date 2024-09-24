import express from "express"

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("The server started at port "+port);

});

app.get("/", (req, res) => {
    res.send("<h1>Testing</h1>");
})