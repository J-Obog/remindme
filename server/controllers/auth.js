const User = require("#models/user");
const { userRegSchema, formatJoiErrors } = require("#utils/validation");

exports.logUserIn = async (req, res) => {};

module.exports.registerNewUser = async (req, res) => {
  const { firstName, lastName, email, password, birthDate } = req.body;

  try {
    await userRegSchema.validateAsync(req.body, { abortEarly: false });
  } catch (e) {
    return res.status(401).json({
      message: formatJoiErrors(e),
    });
  }

  try {
    await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      birthDate: birthDate,
    });

    return res.status(200).json({
      message: "Account successfully created",
    });
  } catch (e) {
    return res.status(500).json(e);
  }
};

exports.logUserOut = async (req, res) => {};
