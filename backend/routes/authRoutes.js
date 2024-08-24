import express from "express";
import { adminLogin, userRegister } from "../controllers/auth/authController.js";
// import nodemailer from "nodemailer";
// import Otp from "../models/optSchema.js";
// import User from "../models/userSchema.js";
const router = express.Router();

router.post("/register", userRegister);
router.post("/admin/login", adminLogin);
// router.post("/send-email",  async (req, res) => {

//     const {userId,subject,to,text,otp} = req.body;
//     if(!subject || !to || !text || !otp) {
//         return res.status(500).json({
//             message: "Invalid username or password",
//         });
//     }

//     const optData = await Otp.create({
//         userId:userId,
//         opt:otp,
//     })
//     optData.save();

//     const auth = nodemailer.createTransport({
//         service: "gmail",
//         secure : true,
//         port : 465,
//         auth: {
//             user: "opmailsystem@gmail.com",
//             pass: "bacb fdiv gchg yoqg"

//         }
//     });

//     const receiver = {
//         from : "opmailsystem@gmail.com",
//         to : to,
//         subject : subject,
//         text : text,
//     };

//     auth.sendMail(receiver, (error, emailResponse) => {
//         if(error)
//         throw error;       
//         response.end();
//     });

//     return res.status(200).json({
//         message: "Email sent successfully",
//     })
    
// });

// router.post("/verify-otp", async (req, res) => {

//     const {userId,otp} = req.body;
//     if(!userId || !otp) {
//         return res.status(500).json({
//             message: "Invalid username or password",
//         });
//     }

//     const optData = await Otp.findOne({
//         userId:userId,
//         opt:otp,
//     })

//     if(!optData) {
//         return res.status(500).json({
//             message: "Invalid OTP",
//         });
//     }

//     const user = await User.findById(userId);
//     user.verified = true;
//     user.save();

//     return res.status(200).json({
//         message: "OTP verified successfully",
//     })

// })
export default router;