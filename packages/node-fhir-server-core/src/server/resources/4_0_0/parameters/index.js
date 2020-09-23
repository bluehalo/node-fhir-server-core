const account = require('./account.parameters.js');
const activitydefinition = require('./activitydefinition.parameters.js');
const adverseevent = require('./adverseevent.parameters.js');
const allergyintolerance = require('./allergyintolerance.parameters');
const appointment = require('./appointment.parameters.js');
const appointmentresponse = require('./appointmentresponse.parameters.js');
const auditevent = require('./auditevent.parameters.js');
const basic = require('./basic.parameters.js');
const binary = require('./binary.parameters.js');
const bodystructure = require('./bodystructure.parameters.js');
const bundle = require('./bundle.parameters.js');
const capabilitystatement = require('./capabilitystatement.parameters.js');
const careplan = require('./careplan.parameters.js');
const careteam = require('./careteam.parameters.js');
const chargeitem = require('./chargeitem.parameters.js');
const chargeitemdefinition = require('./chargeitemdefinition.parameters.js');
const claim = require('./claim.parameters.js');
const claimresponse = require('./claimresponse.parameters.js');
const clinicalimpression = require('./clinicalimpression.parameters.js');
const codesystem = require('./codesystem.parameters.js');
const communication = require('./communication.parameters.js');
const communicationrequest = require('./communicationrequest.parameters.js');
const compartmentdefinition = require('./compartmentdefinition.parameters.js');
const composition = require('./composition.parameters.js');
const conceptmap = require('./conceptmap.parameters.js');
const condition = require('./condition.parameters.js');
const consent = require('./consent.parameters.js');
const contract = require('./contract.parameters.js');
const coverage = require('./coverage.parameters.js');
const coverageeligibilityrequest = require('./coverageeligibilityrequest.parameters.js');
const coverageeligibilityresponse = require('./coverageeligibilityresponse.parameters.js');
const detectedissue = require('./detectedissue.parameters.js');
const device = require('./device.parameters.js');
const devicedefinition = require('./devicedefinition.parameters.js');
const devicemetric = require('./devicemetric.parameters.js');
const devicerequest = require('./devicerequest.parameters.js');
const deviceusestatement = require('./deviceusestatement.parameters.js');
const diagnosticreport = require('./diagnosticreport.parameters.js');
const documentmanifest = require('./documentmanifest.parameters.js');
const documentreference = require('./documentreference.parameters.js');
const domainresource = require('./domainresource.parameters.js');
const effectevidencesynthesis = require('./effectevidencesynthesis.parameters.js');
const encounter = require('./encounter.parameters.js');
const endpoint = require('./endpoint.parameters.js');
const enrollmentrequest = require('./enrollmentrequest.parameters.js');
const enrollmentresponse = require('./enrollmentresponse.parameters.js');
const episodeofcare = require('./episodeofcare.parameters.js');
const eventdefinition = require('./eventdefinition.parameters.js');
const examplescenario = require('./examplescenario.parameters.js');
const explanationofbenefit = require('./explanationofbenefit.parameters.js');
const familymemberhistory = require('./familymemberhistory.parameters.js');
const flag = require('./flag.parameters.js');
const goal = require('./goal.parameters.js');
const graphdefinition = require('./graphdefinition.parameters.js');
const group = require('./group.parameters.js');
const guidanceresponse = require('./guidanceresponse.parameters.js');
const healthcareservice = require('./healthcareservice.parameters.js');
const imagingstudy = require('./imagingstudy.parameters.js');
const immunization = require('./immunization.parameters.js');
const immunizationevaluation = require('./immunizationevaluation.parameters.js');
const immunizationrecommendation = require('./immunizationrecommendation.parameters.js');
const implementationguide = require('./implementationguide.parameters.js');
const insuranceplan = require('./insuranceplan.parameters.js');
const invoice = require('./invoice.parameters.js');
const library = require('./library.parameters.js');
const linkage = require('./linkage.parameters.js');
const list = require('./list.parameters.js');
const location = require('./location.parameters.js');
const measure = require('./measure.parameters.js');
const measurereport = require('./measurereport.parameters.js');
const media = require('./media.parameters.js');
const medication = require('./medication.parameters.js');
const medicationadministration = require('./medicationadministration.parameters.js');
const medicationdispense = require('./medicationdispense.parameters.js');
const medicationknowledge = require('./medicationknowledge.parameters.js');
const medicationrequest = require('./medicationrequest.parameters.js');
const medicationstatement = require('./medicationstatement.parameters.js');
const medicinalproduct = require('./medicinalproduct.parameters.js');
const medicinalproductauthorization = require('./medicinalproductauthorization.parameters.js');
const medicinalproductcontraindication = require('./medicinalproductcontraindication.parameters.js');
const medicinalproductindication = require('./medicinalproductindication.parameters.js');
const medicinalproductpackaged = require('./medicinalproductpackaged.parameters.js');
const medicinalproductpharmaceutical = require('./medicinalproductpharmaceutical.parameters.js');
const messagedefinition = require('./messagedefinition.parameters.js');
const messageheader = require('./messageheader.parameters.js');
const molecularsequence = require('./molecularsequence.parameters.js');
const namingsystem = require('./namingsystem.parameters.js');
const nutritionorder = require('./nutritionorder.parameters.js');
const observation = require('./observation.parameters.js');
const operationdefinition = require('./operationdefinition.parameters.js');
const organization = require('./organization.parameters.js');
const organizationaffiliation = require('./organizationaffiliation.parameters.js');
const patient = require('./patient.parameters.js');
const paymentnotice = require('./paymentnotice.parameters.js');
const paymentreconciliation = require('./paymentreconciliation.parameters.js');
const person = require('./person.parameters.js');
const plandefinition = require('./plandefinition.parameters.js');
const practitioner = require('./practitioner.parameters.js');
const practitionerrole = require('./practitionerrole.parameters.js');
const procedure = require('./procedure.parameters.js');
const provenance = require('./provenance.parameters.js');
const questionnaire = require('./questionnaire.parameters.js');
const questionnaireresponse = require('./questionnaireresponse.parameters.js');
const relatedperson = require('./relatedperson.parameters.js');
const requestgroup = require('./requestgroup.parameters.js');
const researchdefinition = require('./researchdefinition.parameters.js');
const researchelementdefinition = require('./researchelementdefinition.parameters.js');
const researchstudy = require('./researchstudy.parameters.js');
const researchsubject = require('./researchsubject.parameters.js');
const resource = require('./resource.parameters.js');
const riskassessment = require('./riskassessment.parameters.js');
const riskevidencesynthesis = require('./riskevidencesynthesis.parameters.js');
const schedule = require('./schedule.parameters.js');
const searchparameter = require('./searchparameter.parameters.js');
const servicerequest = require('./servicerequest.parameters.js');
const slot = require('./slot.parameters.js');
const specimen = require('./specimen.parameters.js');
const specimendefinition = require('./specimendefinition.parameters.js');
const structuredefinition = require('./structuredefinition.parameters.js');
const structuremap = require('./structuremap.parameters.js');
const subscription = require('./subscription.parameters.js');
const substance = require('./substance.parameters.js');
const substancespecification = require('./substancespecification.parameters.js');
const supplydelivery = require('./supplydelivery.parameters.js');
const supplyrequest = require('./supplyrequest.parameters.js');
const task = require('./task.parameters.js');
const terminologycapabilities = require('./terminologycapabilities.parameters.js');
const testreport = require('./testreport.parameters.js');
const testscript = require('./testscript.parameters.js');
const valueset = require('./valueset.parameters.js');
const verificationresult = require('./verificationresult.parameters.js');
const visionprescription = require('./visionprescription.parameters.js');

module.exports = {
  account,
  activitydefinition,
  adverseevent,
  allergyintolerance,
  appointment,
  appointmentresponse,
  auditevent,
  basic,
  binary,
  bodystructure,
  bundle,
  capabilitystatement,
  careplan,
  careteam,
  chargeitem,
  chargeitemdefinition,
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
  coverageeligibilityrequest,
  coverageeligibilityresponse,
  detectedissue,
  device,
  devicedefinition,
  devicemetric,
  devicerequest,
  deviceusestatement,
  diagnosticreport,
  documentmanifest,
  documentreference,
  domainresource,
  effectevidencesynthesis,
  encounter,
  endpoint,
  enrollmentrequest,
  enrollmentresponse,
  episodeofcare,
  eventdefinition,
  examplescenario,
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
  immunizationevaluation,
  immunizationrecommendation,
  implementationguide,
  insuranceplan,
  invoice,
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
  medicationknowledge,
  medicationrequest,
  medicationstatement,
  medicinalproduct,
  medicinalproductauthorization,
  medicinalproductcontraindication,
  medicinalproductindication,
  medicinalproductpackaged,
  medicinalproductpharmaceutical,
  messagedefinition,
  messageheader,
  molecularsequence,
  namingsystem,
  nutritionorder,
  observation,
  operationdefinition,
  organization,
  organizationaffiliation,
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
  researchdefinition,
  researchelementdefinition,
  researchstudy,
  researchsubject,
  resource,
  riskassessment,
  riskevidencesynthesis,
  schedule,
  searchparameter,
  servicerequest,
  slot,
  specimendefinition,
  structuredefinition,
  structuremap,
  subscription,
  substance,
  substancespecification,
  supplydelivery,
  supplyrequest,
  specimen,
  task,
  terminologycapabilities,
  testreport,
  testscript,
  valueset,
  verificationresult,
  visionprescription
};
