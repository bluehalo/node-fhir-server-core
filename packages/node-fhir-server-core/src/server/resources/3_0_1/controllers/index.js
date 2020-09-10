const account = require('./account.controller.js');
const activitydefinition = require('./activitydefinition.controller.js');
const adverseevent = require('./adverseevent.controller.js');
const appointment = require('./appointment.controller.js');
const appointmentresponse = require('./appointmentresponse.controller.js');
const auditevent = require('./auditevent.controller.js');
const basic = require('./basic.controller.js');
const binary = require('./binary.controller.js');
const bodysite = require('./bodysite.controller.js');
const bundle = require('./bundle.controller.js');
const capabilitystatement = require('./capabilitystatement.controller.js');
const careplan = require('./careplan.controller.js');
const careteam = require('./careteam.controller.js');
const chargeitem = require('./chargeitem.controller.js');
const claim = require('./claim.controller.js');
const claimresponse = require('./claimresponse.controller.js');
const clinicalimpression = require('./clinicalimpression.controller.js');
const codesystem = require('./codesystem.controller.js');
const communication = require('./communication.controller.js');
const communicationrequest = require('./communicationrequest.controller.js');
const compartmentdefinition = require('./compartmentdefinition.controller.js');
const composition = require('./composition.controller.js');
const conceptmap = require('./conceptmap.controller.js');
const condition = require('./condition.controller.js');
const consent = require('./consent.controller.js');
const contract = require('./contract.controller.js');
const coverage = require('./coverage.controller.js');
const detectedissue = require('./detectedissue.controller.js');
const device = require('./device.controller.js');
const devicemetric = require('./devicemetric.controller.js');
const devicerequest = require('./devicerequest.controller.js');
const deviceusestatement = require('./deviceusestatement.controller.js');
const diagnosticreport = require('./diagnosticreport.controller.js');
const documentmanifest = require('./documentmanifest.controller.js');
const documentreference = require('./documentreference.controller.js');
const domainresource = require('./domainresource.controller.js');
const encounter = require('./encounter.controller.js');
const endpoint = require('./endpoint.controller.js');
const enrollmentrequest = require('./enrollmentrequest.controller.js');
const enrollmentresponse = require('./enrollmentresponse.controller.js');
const episodeofcare = require('./episodeofcare.controller.js');
const explanationofbenefit = require('./explanationofbenefit.controller.js');
const familymemberhistory = require('./familymemberhistory.controller.js');
const flag = require('./flag.controller.js');
const goal = require('./goal.controller.js');
const graphdefinition = require('./graphdefinition.controller.js');
const group = require('./group.controller.js');
const guidanceresponse = require('./guidanceresponse.controller.js');
const healthcareservice = require('./healthcareservice.controller.js');
const imagingstudy = require('./imagingstudy.controller.js');
const immunization = require('./immunization.controller.js');
const immunizationrecommendation = require('./immunizationrecommendation.controller.js');
const implementationguide = require('./implementationguide.controller.js');
const library = require('./library.controller.js');
const linkage = require('./linkage.controller.js');
const list = require('./list.controller.js');
const location = require('./location.controller.js');
const measure = require('./measure.controller.js');
const measurereport = require('./measurereport.controller.js');
const media = require('./media.controller.js');
const medication = require('./medication.controller.js');
const medicationadministration = require('./medicationadministration.controller.js');
const medicationdispense = require('./medicationdispense.controller.js');
const medicationrequest = require('./medicationrequest.controller.js');
const medicationstatement = require('./medicationstatement.controller.js');
const messagedefinition = require('./messagedefinition.controller.js');
const messageheader = require('./messageheader.controller.js');
const namingsystem = require('./namingsystem.controller.js');
const nutritionorder = require('./nutritionorder.controller.js');
const observation = require('./observation.controller.js');
const operationdefinition = require('./operationdefinition.controller.js');
const organization = require('./organization.controller.js');
const patient = require('./patient.controller.js');
const paymentnotice = require('./paymentnotice.controller.js');
const paymentreconciliation = require('./paymentreconciliation.controller.js');
const person = require('./person.controller.js');
const plandefinition = require('./plandefinition.controller.js');
const practitioner = require('./practitioner.controller.js');
const practitionerrole = require('./practitionerrole.controller.js');
const procedure = require('./procedure.controller.js');
const provenance = require('./provenance.controller.js');
const questionnaire = require('./questionnaire.controller.js');
const questionnaireresponse = require('./questionnaireresponse.controller.js');
const relatedperson = require('./relatedperson.controller.js');
const requestgroup = require('./requestgroup.controller.js');
const researchstudy = require('./researchstudy.controller.js');
const researchsubject = require('./researchsubject.controller.js');
const resource = require('./resource.controller.js');
const riskassessment = require('./riskassessment.controller.js');
const schedule = require('./schedule.controller.js');
const searchparameter = require('./searchparameter.controller.js');
const slot = require('./slot.controller.js');
const specimen = require('./specimen.controller.js');
const structuredefinition = require('./structuredefinition.controller.js');
const structuremap = require('./structuremap.controller.js');
const subscription = require('./subscription.controller.js');
const substance = require('./substance.controller.js');
const supplydelivery = require('./supplydelivery.controller.js');
const supplyrequest = require('./supplyrequest.controller.js');
const task = require('./task.controller.js');
const testreport = require('./testreport.controller.js');
const testscript = require('./testscript.controller.js');
const valueset = require('./valueset.controller.js');
const visionprescription = require('./visionprescription.controller.js');

module.exports = {
  account,
  activitydefinition,
  adverseevent,
  appointment,
  appointmentresponse,
  auditevent,
  basic,
  binary,
  bodysite,
  bundle,
  capabilitystatement,
  careplan,
  careteam,
  chargeitem,
  claim,
  claimresponse,
  clinicalimpression,
  codesystem,
  communication,
  communicationrequest,
  compartmentdefinition,
  composition,
  conceptmap,
  condition,
  consent,
  contract,
  coverage,
  detectedissue,
  device,
  devicemetric,
  devicerequest,
  deviceusestatement,
  diagnosticreport,
  documentmanifest,
  documentreference,
  domainresource,
  encounter,
  endpoint,
  enrollmentrequest,
  enrollmentresponse,
  episodeofcare,
  explanationofbenefit,
  familymemberhistory,
  flag,
  goal,
  graphdefinition,
  group,
  guidanceresponse,
  healthcareservice,
  imagingstudy,
  immunization,
  immunizationrecommendation,
  implementationguide,
  library,
  linkage,
  list,
  location,
  measure,
  measurereport,
  media,
  medication,
  medicationadministration,
  medicationdispense,
  medicationrequest,
  medicationstatement,
  messagedefinition,
  messageheader,
  namingsystem,
  nutritionorder,
  observation,
  operationdefinition,
  organization,
  patient,
  paymentnotice,
  paymentreconciliation,
  person,
  plandefinition,
  practitioner,
  practitionerrole,
  procedure,
  provenance,
  questionnaire,
  questionnaireresponse,
  relatedperson,
  requestgroup,
  researchstudy,
  researchsubject,
  resource,
  riskassessment,
  schedule,
  searchparameter,
  slot,
  structuredefinition,
  structuremap,
  subscription,
  substance,
  supplydelivery,
  supplyrequest,
  specimen,
  task,
  testreport,
  testscript,
  valueset,
  visionprescription,
};
