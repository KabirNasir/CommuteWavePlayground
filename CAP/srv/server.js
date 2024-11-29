const cds = require("@sap/cds");
const express = require("express");

const authenticateJWT = require("../middleware/auth");

cds.on("bootstrap", (app) => {
  const cds_swagger = require("cds-swagger-ui-express");

  app.use(cds_swagger());
  app.use(authenticateJWT);
});

module.exports = cds.server;
