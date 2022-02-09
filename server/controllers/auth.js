const User = require("#models/user");
const { userRegSchema, formatJoiErrors } = require("#utils/validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.logUserIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Could not find accout with matching email" });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(401)
          .json({ message: "Invalid email and password combination" });
      } else {
        const access = await jwt.sign({ jti: user.id }, "secretkey", {
          expiresIn: "1h",
        });
        const refresh = await jwt.sign({ jti: user.id }, "secretkey", {
          expiresIn: "30d",
        });
        return res
          .status(200)
          .json({ access_token: access, refresh_token: refresh });
      }
    }
  } catch (e) {
    return res.status(500).json(e);
  }
};

exports.registerNewUser = async (req, res) => {
  const { firstName, lastName, email, password, birthDate, phone } = req.body;
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
      phone: phone,
    });

    return res.status(200).json({ message: "Account successfully created" });
  } catch (e) {
    return res.status(500).json(e);
  }
};

exports.logUserOut = async (req, res) => {};
