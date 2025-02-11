const Joi = require('joi')


const registerDTO = Joi.object({
    name:Joi.string().min(3).max(50).required(),
    email:Joi.string().email().required(),
    password:Joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/).required(),
    confirmPassword:Joi.string().valid(Joi.ref("password")).required(),
    role:Joi.string().pattern(/^(seller|customer|admin)$/)

})
module.exports ={registerDTO}