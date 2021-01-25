
"use strict";

let TrayContents = require('./TrayContents.js');
let ConveyorBeltState = require('./ConveyorBeltState.js');
let KitTray = require('./KitTray.js');
let PopulationState = require('./PopulationState.js');
let KitObject = require('./KitObject.js');
let Proximity = require('./Proximity.js');
let DetectedObject = require('./DetectedObject.js');
let Kit = require('./Kit.js');
let StorageUnit = require('./StorageUnit.js');
let Model = require('./Model.js');
let VacuumGripperState = require('./VacuumGripperState.js');
let Order = require('./Order.js');
let LogicalCameraImage = require('./LogicalCameraImage.js');

module.exports = {
  TrayContents: TrayContents,
  ConveyorBeltState: ConveyorBeltState,
  KitTray: KitTray,
  PopulationState: PopulationState,
  KitObject: KitObject,
  Proximity: Proximity,
  DetectedObject: DetectedObject,
  Kit: Kit,
  StorageUnit: StorageUnit,
  Model: Model,
  VacuumGripperState: VacuumGripperState,
  Order: Order,
  LogicalCameraImage: LogicalCameraImage,
};
