const Registration = require("../models/Registration_Model.js");

const createRegistration = async (req, res) => {
  try {
    const bodyData = req.body;
    const registration = new Registration(bodyData);
    const registrationData = await registration.save();
    res.send(registrationData);
  } catch (error) {
    res.send(error);
  }
};
const readAllRegistration = async (req, res) => {
  try {
    const registrationData = await Registration.find({});
    // console.log(userData);
    res.send(registrationData);
  } catch (error) {
    res.send(error);
  }
};
const readRegistrationId = async (req, res) => {
  try {
    const id = req.params.id;
    const registration = await Registration.findById({ _id: id });
    res.send(registration);
  } catch (error) {
    res.send(error);
  }
};
const updateRegistration = async (req, res) => {
  try {
    const id = req.params.id;
    const registration = await Registration.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(registration);
  } catch (error) {
    res.send(error);
  }
};

const deleteRegistrationId = async (req, res) => {
  try {
    const id = req.params.id;
    const registration = await Registration.findByIdAndDelete({ _id: id });
    res.send(registration);
  } catch (error) {
    res.send(error);
  }
};

const readRegistrationByName = async (req, res) => {
  try {
    const name = req.params.name; // Assuming you pass the name as a URL parameter
    const registrations = await Registration.find({ name: name }); // Use 'find' to retrieve all matching entries
    res.send(registrations);
  } catch (error) {
    res.send(error);
  }
};

const readRegistrationByMobile = async (req, res) => {
  try {
    const mobile = req.params.mobile; // Assuming you pass the mobile number as a URL parameter
    const registrations = await Registration.find({ mobile: mobile }); // Use 'find' to retrieve all matching entries
    res.send(registrations);
  } catch (error) {
    res.send(error);
  }
};




module.exports = {
  createRegistration,
  readRegistrationId,
  readAllRegistration,
  updateRegistration,
  deleteRegistrationId,
  readRegistrationByName,
  readRegistrationByMobile

};
