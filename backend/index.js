const express = require("express");
const app = express();
const router = require("./routes/routes");

const port = 3001;

app.use('/api/v1', router);


app.listen(port, () => {
    console.log(`App listening at port ${port}`)
});