const express = require("express");

const router = express.Router();
const {
    createThumb,
    readThumbId,
    readAllThumb,
    updateThumb,
    deleteThumbId,
    readThumbByName,
    readThumbBy_Registration_num
} = require("../controllers/Thumb_Controller.js");



//Create User
router.post('/createThumb',  createThumb);

//read all user
router.get("/readAllThumb",   readAllThumb);

//Read by Id
router.get("/readThumbById/:id",  readThumbId);

// update user
router.put("/updateThumb/:id", updateThumb);

//delete Id
router.delete("/deleteThumb/:id", deleteThumbId);

// Read by Name 
router.get("/readThumbByName/:name", readThumbByName);

//Read by Mobile number
router.get("/readThumbByRegistrationNum/:mobile", readThumbBy_Registration_num);

module.exports = router;

