const express = require("express");
const getController = require("../controllers/getController");

const gettersRouter = express.Router();

gettersRouter.get("/", getController);



module.exports = gettersRouter;