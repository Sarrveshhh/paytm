const express = require("express");
const app = express();
const router = require("./routes/routes");
const cors = require("cors");
const body_parser = require("body-parser");
const jwt = require("jsonwebtoken");

const PORT = 3000;


app.use(cors());
app.use(express.json());

app.use('/api/v1', router);


app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`)
});