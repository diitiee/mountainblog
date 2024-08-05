const user = require('../Models/userModel');
const jwt = require('jsonwebtoken');

// Register
exports.registercontroller = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            res.status(406).json("User already exists... please login");
        } else {
            const newUser = new user({
                username,
                email,
                password
            });
            await newUser.save();
            res.status(200).json(newUser);
        }
    } catch (err) {
        res.status(401).json(err);
    }
};

// Login
exports.loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await user.findOne({ email, password });
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET);
            res.status(200).json({ existingUser,token });
        } else {
            res.status(401).json("Invalid email/password");
        }
    } catch (err) {
        res.status(401).json(err);
    }
};
