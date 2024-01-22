const express = require('express');
const router = express.Router();


const signin = () => {
    console.log(`signin logic here!`);
};

const signup = () => {
    console.log(`signup logic here!`);
};



router.get("/signin", signin);
router.get("/signup", signup);


module.exports = router;