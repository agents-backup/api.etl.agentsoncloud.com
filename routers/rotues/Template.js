const express = require("express");
const templateRoute = express.Router();

/* -------------------------------------------------------------------------------------------------------------- */

const {
  createEdTemplate,
  getEdTemplates,
  updateEdTemplate,deleteEdTemplate
} = require("../../routers/controllers/edt");

///////////////////////////////////////////////// created by user  //////////////////////////////////////////////////////

templateRoute.post("/addEtlTemplate", createEdTemplate);
templateRoute.post("/getEtlTemplates", getEdTemplates);
templateRoute.post("/updateEtlTemplate", updateEdTemplate);
templateRoute.post("/deleteEtlTemplate", deleteEdTemplate);
// templateRoute.post("/createNotificationByEvent", createNotificationByEvent);
// templateRoute.post(
//   "/createNotificationFromTemplate",
//   createNotificationByTemplateId
// );

////////////////////////////////////////////////  reassign    ////////////////////////////////////////////////////////

/// exports
module.exports = templateRoute;
