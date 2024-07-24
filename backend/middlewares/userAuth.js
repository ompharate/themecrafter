import jwt from "jsonwebtoken";
const isUser = async (req, res, next) => {
  const token = req.cookies.token;
  console.log("token is",token)
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized token not found",
    });
  }
  const userData = await jwt.verify(token, process.env.SECRET_KEY);

  if (!userData) {
    return res.status(401).json({
      message: "Unauthorized token invalid",
    });
  }

  

  req.user = userData;
  next();
};

export default isUser;
