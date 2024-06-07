import mongoose from "mongoose";
const OtpSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    opt: {
      type: String,
    },
   createdAt:{
    type: Date,
    default: Date.now,
    expires: 120000,
    select: false,
    required: true,
    index: {
      expires: "120000"
    }
   }
  },
  { timestamps: true }
);

const Otp = mongoose.model("Otp", OtpSchema);
export default Otp;
