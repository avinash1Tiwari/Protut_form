const { StatusCodes } = require("http-status-codes");
const Developerform = require("../models/User");
const { message } = require("telegraf/filters");

const {ServerConfig} = require('../config')


const RegisterDeveloper = async (req, res) => {
  console.log(req.body)
  const { formdata1, formdata2 } = req.body;

  const developerData = {
    formdata1: {
      firstName: formdata1.firstName,
      lastName: formdata1.lastName,
      personalUrl: formdata1.personalUrl,
      phone: formdata1.phone,
      country: formdata1.country,
      tagline: formdata1.tagline,

    },
    formdata2: {
      arrayOfObjects: formdata2.map(obj => ({
        title: obj.title,
        type: obj.type,
        duration: obj.duration,
        price: obj.price,
        description: obj.description,
        attendees: obj.attendees,
        prerequisites: obj.prerequisites,
        thumbnail: obj.thumbnail,
      }))
    }
  };

  try {
    const newDeveloper = new Developerform(developerData);
    const savedDeveloper = await newDeveloper.save();
    console.log("saved")
    res.status(201).json(savedDeveloper);
  } catch (error) {
    res.status(500).json({ message: 'Error creating developer', error });
  }
};










module.exports = {
  RegisterDeveloper,
};
