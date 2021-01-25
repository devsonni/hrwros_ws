
"use strict";

let VacuumGripperControl = require('./VacuumGripperControl.js')
let PopulationControl = require('./PopulationControl.js')
let ConveyorBeltControl = require('./ConveyorBeltControl.js')
let SubmitTray = require('./SubmitTray.js')
let AGVControl = require('./AGVControl.js')
let GetMaterialLocations = require('./GetMaterialLocations.js')

module.exports = {
  VacuumGripperControl: VacuumGripperControl,
  PopulationControl: PopulationControl,
  ConveyorBeltControl: ConveyorBeltControl,
  SubmitTray: SubmitTray,
  AGVControl: AGVControl,
  GetMaterialLocations: GetMaterialLocations,
};
