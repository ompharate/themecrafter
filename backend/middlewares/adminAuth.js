import jwt from "jsonwebtoken";
const isAdmin = async (req, res, next) => {
  const token = req.cookies.token;
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
 
  if (userData.role !== "admin") {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }
  req.user = userData;
  next();
};

export default isAdmin;
