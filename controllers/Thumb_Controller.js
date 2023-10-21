const Thumb = require("../models/Thumb_Model.js");

const createThumb = async (req, res) => {
  try {
    const bodyData = req.body;
    const thumb = new Thumb(bodyData);
    const thumbData = await thumb.save();
    res.send(thumbData);
  } catch (error) {
    res.send(error);
  }
};
const readAllThumb = async (req, res) => {
  try {
    const ThumbData = await Thumb.find({});
    // console.log(userData);
    res.send(ThumbData);
  } catch (error) {
    res.send(error);
  }
};
const readThumbId = async (req, res) => {
  try {
    const id = req.params.id;
    const Thumb = await Thumb.findById({ _id: id });
    res.send(Thumb);
  } catch (error) {
    res.send(error);
  }
};
const updateThumb = async (req, res) => {
  try {
    const id = req.params.id;
    const Thumb = await Thumb.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(Thumb);
  } catch (error) {
    res.send(error);
  }
};

const deleteThumbId = async (req, res) => {
  try {
    const id = req.params.id;
    const Thumb = await Thumb.findByIdAndDelete({ _id: id });
    res.send(Thumb);
  } catch (error) {
    res.send(error);
  }
};

const readThumbByName = async (req, res) => {
  try {
    const name = req.params.name; // Assuming you pass the name as a URL parameter
    const Thumbs = await Thumb.find({ name: name }); // Use 'find' to retrieve all matching entries
    res.send(Thumbs);
  } catch (error) {
    res.send(error);
  }
};

const readThumbBy_Registration_num = async (req, res) => {
  try {
    const registration_number = req.params.mobile; // Assuming you pass the mobile number as a URL parameter
    const Thumbs = await Thumb.find({ registration_num: registration_number }); // Use 'find' to retrieve all matching entries
    res.send(Thumbs);
  } catch (error) {
    res.send(error);
  }
};




module.exports = {
  createThumb,
  readThumbId,
  readAllThumb,
  updateThumb,
  deleteThumbId,
  readThumbByName,
  readThumbBy_Registration_num

};
