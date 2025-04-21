import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  await newUser
    .save()
    .then((user) => {
      res.status(201).json({ message: "User created successfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};
