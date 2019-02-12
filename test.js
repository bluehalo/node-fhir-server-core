const Patient = require('./src/server/resources/4_0_0/schemas/patient.js');
const patientData = require('./patient-example.json');

let patient = new Patient(patientData);
// console.log(JSON.stringify(patient));

const Bundle = require('./src/server/resources/4_0_0/schemas/bundle.js');
const bundleData = require('./bundle-example.json');

let bundle = new Bundle(bundleData);
console.log(JSON.stringify(bundle));
