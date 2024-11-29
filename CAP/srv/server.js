const cds = require("@sap/cds");
const express = require("express");

const authenticateJWT = require("../middleware/auth");

cds.on("bootstrap", (app) => {
  app.use(authenticateJWT);
});

module.exports = cds.server;
