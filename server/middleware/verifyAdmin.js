const { getAuth } = require("firebase-admin/auth");

const ADMIN_UID = process.env.ADMIN_UID;

const verifyAdmin = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const idToken = authHeader.split(" ")[1];

  try {
    const decodedToken = await getAuth().verifyIdToken(idToken);

    if (decodedToken.uid !== ADMIN_UID) {
      return res.status(403).json({ message: "Access denied" });
    }

    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};


module.exports = { verifyAdmin };
