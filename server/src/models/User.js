const mongoose = require('mongoose')

const validator = require('validator');




const arrayOfObjectsSchema = new mongoose.Schema({
  title : {type: String, required: true },
  type : {type: String, required: true },
  duration : {type: String, required: true },
  price : {type: String, required: true },
  description : {type: String, required: true },
//   thubmnail : {type: File, required: true },
attendees : {type: String, required: true },
prerequisites : {type: String, required: true },
description : {type: String, required: true },
}, { _id: false });

const object3Schema = new mongoose.Schema({
  arrayOfObjects: { type: [arrayOfObjectsSchema], required: true }
}, { _id: false });

const developerSchema = new mongoose.Schema({
  formdata1: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    personalUrl: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    tagline: { type: String, required: true },
    // socialprofile:{
    //     profile : { type: String, required: true },
    //     profileUrl : { type: String, required: true },
    // } ,
    // compay: {
    //     companyName :  { type: String, required: true },
    //     companyExperience :  { type: String, required: true },
    // }
  },

  formdata2: { type: object3Schema, required: true },
  createdAt : {
    type : Date,
    required:true,
    default : Date.now()
},
updatedAt : {
    type : Date,
    required:true,
    default : Date.now()
}
});


module.exports = mongoose.model("Developerform",developerSchema)

