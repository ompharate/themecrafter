import User from "../../models/userSchema.js";
const userRegister = async (req, res, next) => {
  const { username, userId } = req.body;

  if (!username || !userId) {
    return res.status(500).json({
      message: "missing username or password",
    });
  }

  try {
    const isUserPresent = await User.findOne({userId:userId});
    if (isUserPresent) {
      return res.status(500).json({
        message: "User already exists with this email",
      });
    }

    const user = new User({
      userId,
      username: username,
    });
    user.save();

    return res.status(201).json({
      message: "User registered successfully",
      user: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const adminLogin = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(500).json({
      message: "Invalid username or password",
    });
  }

  res.send(true);
};

export { userRegister, adminLogin };
