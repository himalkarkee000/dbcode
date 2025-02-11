const authRoute = require("../model/auth/auth.router")

const mainRouter = require("express").Router()

mainRouter.use("/auth",authRoute)


module.exports = mainRouter