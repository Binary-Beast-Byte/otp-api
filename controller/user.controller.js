const { Users } =  require("../models")
const createOtp = async (req, res) => {
    const { otp } = req.body;
    if (otp) {
      // Validate OTP
      if (/^\d{5}7$/.test(otp)) {
        try {
          await Users.create({ otp }); // Pass the OTP as an object field
          res.status(200).send('OTP created successfully');
        } catch (error) {
          console.error(error);
          res.status(500).send('Failed to create OTP');
        }
      } else {
        res.status(400).send('Invalid OTP format');
      }
    } else {
      res.status(400).send('OTP field is required');
    }
  };
  
  
    

module.exports  = {
    createOtp
}