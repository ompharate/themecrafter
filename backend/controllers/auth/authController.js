import User from "../../models/userSchema.js";
import jwt from "jsonwebtoken";
const userRegister = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(500).json({
      message: "Invalid username or password",
    });
  }

  try {
    const isUserPresent = await User.findOne({ email });
    if (isUserPresent) {
      return res.status(500).json({
        message: "User already exists with this email",
      });
    }

    const user = new User({
      name,
      email,
      password,
    });
    user.save();

    return res.status(201).json({
      message: "User registered successfully",
      user:user
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(500).json({
      message: "Invalid username or password",
    });
  }

  try {
    const user = await User.findOne({ email: email, password: password });
    const tokenData = {
      name: user.name,
      _id: user.id,
      email: user.email,
      verified: user.verified,
      address: user.address,
      role: user.role,
    };
    if (!user) {
      return res.status(500).json({
        message: " username or password",
      });
    }
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY);
    res.cookie("token", token,).status(202).json({
      message: "User logged in successfully",
      profile: tokenData,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
export { userRegister, userLogin };
