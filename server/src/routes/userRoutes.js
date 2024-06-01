const express = require('express');
const router = express.Router();
const { userController } = require("../controller");

router.get('/api', (req, res) => {
    res.send("all is well bhai !!");
});

// router.post('/signup', userController.signUp)
// router.post('/login', userController.logIn)
router.post('/registerdeveloper', userController.RegisterDeveloper);

module.exports = router;


// app.post('/api/registerdeveloper', (req, res) => {
//     // Your logic here
//     res.send('Developer registered successfully');
// });