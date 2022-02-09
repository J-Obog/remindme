const User = require("#models/user");
const { userRegSchema, formatJoiErrors } = require("#utils/validation");
const cache = require("../config/cache");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.logUserIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email: email } });

    if (!existingUser) {
      return res
        .status(401)
        .json({ message: "Invalid email and password combination" });
    } else {
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (!isMatch) {
        return res
          .status(401)
          .json({ message: "Invalid email and password combination" });
      } else {
        const accessToken = await jwt.sign(
          { jti: existingUser.id, type: "access" },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: "1h",
          }
        );
        const refreshToken = await jwt.sign(
          { jti: existingUser.id, type: "refresh" },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: "30d",
          }
        );
        return res
          .status(200)
          .json({ accessToken: accessToken, refreshToken: refreshToken });
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
    const existingUser = await User.findOne({ where: { email: email } });
    if (existingUser)
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

exports.logUserOut = async (req, res) => {
  const { jti } = req;
  const rawToken = req.headers[process.env.JWT_HEADER_NAME];

  try {
    await cache.set(`jwtoken-${rawToken}`, 3800, jti);
    return res.status(200).json({ message: "Successfully logged out" });
  } catch (e) {
    return res.status(500).json(e);
  }
};
