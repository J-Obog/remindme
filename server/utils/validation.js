const Joi = require("joi");

exports.formatJoiErrors = (err) => {
  let errorMap = {};
  err.details.forEach((d) => {
    errorMap[d.path[0]] = d.message;
  });

  return errorMap;
};

exports.userRegSchema = Joi.object()
  .keys({
    firstName: Joi.string().required().messages({
      "string.empty": "First name cannot be empty",
    }),
    lastName: Joi.string().required().messages({
      "string.empty": "Last name cannot be empty",
    }),
    email: Joi.string()
      .lowercase()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .messages({
        "string.empty": "Email cannot be empty",
        "string.email": "Email must be a valid address",
      }),
    password: Joi.string().min(8).required().messages({
      "string.empty": "Password cannot be empty",
      "string.min": "Password must be at least {{#limit}} characters long",
    }),
    birthDate: Joi.date()
      .iso()
      .min(new Date(1900, 0, 1).toISOString()) //0 represents monthIndex
      .max(new Date().toISOString().slice(0, 10))
      .required()
      .messages({
        "string.empty": "Birthdate cannot be empty",
        "date.format": "Birthdate must be in ISO 8601 format",
        "date.min": "Must be born on or after {{#limit}}",
        "date.max": "Must be born on or before {{#limit}}",
      }),

    phone: Joi.string().length(10).messages({
      "string.empty": "Phone number cannot be empty",
      "string.length": "Phone number must be 10 digits",
    }),
  })
  .unknown(true);
