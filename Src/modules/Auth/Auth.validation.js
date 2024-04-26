import joi from "joi";

export const signup = joi.object({
  userName: joi.string().required().min(2).max(20),
  email: joi.string().email().required().min(5).message({
    "string.email": "Plz Enter a valid Email",
    "string.empty": "Email is required",
  }),
  password: joi.string().required().min(3).message({
    "string.empty": "Password is Required",
  }),
});

export const login = joi.object({
  email: joi.string().email().required().min(5).message({
    "string.email": "Plz Enter a valid Email",
    "string.empty": "Email is required",
  }),
  password: joi.string().required().min(3).message({
    "string.empty": "Password is Required",
  }),
});
