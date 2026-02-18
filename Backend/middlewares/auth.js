const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => { 
    const token = req.headers;
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error("Invalid token:", error);
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = authMiddleware;