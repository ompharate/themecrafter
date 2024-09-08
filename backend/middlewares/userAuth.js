import { verifyToken } from "@clerk/clerk-sdk-node";

const isUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized, token not found" });
    }

    const session = await verifyToken(token, {
      jwtKey: process.env.CLERK_JWT_KEY,
    });
    if (!session) {
      return res.status(401).json({ message: "Unauthorized, token invalid" });
    }

    req.user = session.user;

    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default isUser;
