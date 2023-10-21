const express = require("express");

const router = express.Router();
const {
    createRegistration,
  readRegistrationId,
  readAllRegistration,
  updateRegistration,
  deleteRegistrationId,
  readRegistrationByName,
  readRegistrationByMobile
} = require("../controllers/Registration_Controller.js");



//Create User
router.post('/createRegistration',  createRegistration);

//read all user
router.get("/readAllRegistration",   readAllRegistration);

//Read by Id
router.get("/readRegistrationbyId/:id",  readRegistrationId);

// update user
router.put("/updateRegistration/:id", updateRegistration);

//delete Id
router.delete("/deleteRegistration/:id", deleteRegistrationId);

// Read by Name 
router.get("/readRegistrationByName/:name", readRegistrationByName);

//Read by Mobile number
router.get("/readRegistrationByMobile/:mobile", readRegistrationByMobile);

module.exports = router;

