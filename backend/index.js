const express = require("express");
const app = express();
const router = require("./routes/routes");
const cors = require("cors");
const body_parser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");


const PORT = 3000;


dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/api/v1', router);


mongoose.connect(process.env.MONGOOSE_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));