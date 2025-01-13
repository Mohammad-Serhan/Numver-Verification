
'use strict';
const axios = require("axios");



const apiURL = process.env.API_URL;
const API_ACC_KEY = process.env.NUMVERIFY_ACESS_KEY;



 async function validatePhoneNumber(number) {
  let phoneDetails;
  try {
      await axios.get(`${apiURL}${API_ACC_KEY}&number=${number}&format=1`)
    .then(res => phoneDetails = res.data)
    .catch(error => console.log('error', error));

  } catch (error) {
      console.log("Error", error.message);
  }


  if (phoneDetails.valid === true){
    return phoneDetails;
  }
  else 
    return { message: "The phone number is invalid"};

};



module.exports =  {validatePhoneNumber};

// { 
// 	"Country name :" : phoneDetails.country_name,
// 	"Country code :" : phoneDetails.country_code,
// 	"Carrier name :" : phoneDetails.carrier
// };