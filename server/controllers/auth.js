const User = require("#models/user");
const { userRegSchema, formatJoiErrors } = require("#utils/validation");
const bcrypt = require("bcrypt");

exports.logUserIn = async (req, res) => {};

exports.registerNewUser = async (req, res) => {
  const { firstName, lastName, email, password, birthDate } = req.body;
  const { error } = userRegSchema.validate(req.body, { abortEarly: false });

  if (error) return res.status(401).json({ message: formatJoiErrors(error) });

  try {
    const user = await User.findOne({ where: { email: email } });
    if (user)
      return res
        .status(401)
        .json({ message: { email: "Account with email already exists" } });

    const phash = await bcrypt.hash(password, 10);

    await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: phash,
      birthDate: birthDate,
    });

    return res.status(200).json({ message: "Account successfully created" });
  } catch (e) {
    return res.status(500).json(e);
  }
};

exports.logUserOut = async (req, res) => {};
