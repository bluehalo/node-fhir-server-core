const account = require('./account');
const activitydefinition = require('./activitydefinition');
const adverseevent = require('./adverseevent');
const appointment = require('./appointment');
const appointmentresponse = require('./appointmentresponse');
const auditevent = require('./auditevent');
const basic = require('./basic');
const binary = require('./binary');
const bodystructure = require('./bodystructure');
const bundle = require('./bundle');
const capabilitystatement = require('./capabilitystatement');
const careplan = require('./careplan');
const careteam = require('./careteam');
const chargeitem = require('./chargeitem');
const chargeitemdefinition = require('./chargeitemdefinition');
const claim = require('./claim');
const claimresponse = require('./claimresponse');
const clinicalimpression = require('./clinicalimpression');
const codesystem = require('./codesystem');
const communication = require('./communication');
const communicationrequest = require('./communicationrequest');
const compartmentdefinition = require('./compartmentdefinition');
const composition = require('./composition');
const conceptmap = require('./conceptmap');
const condition = require('./condition');
const consent = require('./consent');
const contract = require('./contract');
const coverage = require('./coverage');
const coverageeligibilityrequest = require('./coverageeligibilityrequest');
const coverageeligibilityresponse = require('./coverageeligibilityresponse');
const detectedissue = require('./detectedissue');
const device = require('./device');
const devicedefinition = require('./devicedefinition');
const devicemetric = require('./devicemetric');
const devicerequest = require('./devicerequest');
const deviceusestatement = require('./deviceusestatement');
const diagnosticreport = require('./diagnosticreport');
const documentmanifest = require('./documentmanifest');
const documentreference = require('./documentreference');
const domainresource = require('./domainresource');
const effectevidencesynthesis = require('./effectevidencesynthesis');
const encounter = require('./encounter');
const endpoint = require('./endpoint');
const enrollmentrequest = require('./enrollmentrequest');
const enrollmentresponse = require('./enrollmentresponse');
const episodeofcare = require('./episodeofcare');
const eventdefinition = require('./eventdefinition');
const examplescenario = require('./examplescenario');
const explanationofbenefit = require('./explanationofbenefit');
const familymemberhistory = require('./familymemberhistory');
const flag = require('./flag');
const goal = require('./goal');
const graphdefinition = require('./graphdefinition');
const group = require('./group');
const guidanceresponse = require('./guidanceresponse');
const healthcareservice = require('./healthcareservice');
const imagingstudy = require('./imagingstudy');
const immunization = require('./immunization');
const immunizationevaluation = require('./immunizationevaluation');
const immunizationrecommendation = require('./immunizationrecommendation');
const implementationguide = require('./implementationguide');
const insuranceplan = require('./insuranceplan');
const invoice = require('./invoice');
const library = require('./library');
const linkage = require('./linkage');
const list = require('./list');
const location = require('./location');
const measure = require('./measure');
const measurereport = require('./measurereport');
const media = require('./media');
const medication = require('./medication');
const medicationadministration = require('./medicationadministration');
const medicationdispense = require('./medicationdispense');
const medicationknowledge = require('./medicationknowledge');
const medicationrequest = require('./medicationrequest');
const medicationstatement = require('./medicationstatement');
const medicinalproduct = require('./medicinalproduct');
const medicinalproductauthorization = require('./medicinalproductauthorization');
const medicinalproductcontraindication = require('./medicinalproductcontraindication');
const medicinalproductindication = require('./medicinalproductindication');
const medicinalproductpackaged = require('./medicinalproductpackaged');
const medicinalproductpharmaceutical = require('./medicinalproductpharmaceutical');
const messagedefinition = require('./messagedefinition');
const messageheader = require('./messageheader');
const molecularsequence = require('./molecularsequence');
const namingsystem = require('./namingsystem');
const nutritionorder = require('./nutritionorder');
const observation = require('./observation');
const operationdefinition = require('./operationdefinition');
const operationoutcome = require('./operationoutcome');
const organization = require('./organization');
const organizationaffiliation = require('./organizationaffiliation');
const patient = require('./patient');
const paymentnotice = require('./paymentnotice');
const paymentreconciliation = require('./paymentreconciliation');
const person = require('./person');
const plandefinition = require('./plandefinition');
const practitioner = require('./practitioner');
const practitionerrole = require('./practitionerrole');
const procedure = require('./procedure');
const provenance = require('./provenance');
const questionnaire = require('./questionnaire');
const questionnaireresponse = require('./questionnaireresponse');
const relatedperson = require('./relatedperson');
const requestgroup = require('./requestgroup');
const researchdefinition = require('./researchdefinition');
const researchelementdefinition = require('./researchelementdefinition');
const researchstudy = require('./researchstudy');
const researchsubject = require('./researchsubject');
const resource = require('./resource');
const riskassessment = require('./riskassessment');
const riskevidencesynthesis = require('./riskevidencesynthesis');
const schedule = require('./schedule');
const searchparameter = require('./searchparameter');
const servicerequest = require('./servicerequest');
const slot = require('./slot');
const specimen = require('./specimen');
const specimendefinition = require('./specimendefinition');
const structuredefinition = require('./structuredefinition');
const structuremap = require('./structuremap');
const subscription = require('./subscription');
const substance = require('./substance');
const substancespecification = require('./substancespecification');
const supplydelivery = require('./supplydelivery');
const supplyrequest = require('./supplyrequest');
const task = require('./task');
const terminologycapabilities = require('./terminologycapabilities');
const testreport = require('./testreport');
const testscript = require('./testscript');
const valueset = require('./valueset');
const verificationresult = require('./verificationresult');
const visionprescription = require('./visionprescription');

module.exports = {
  account,
  activitydefinition,
  adverseevent,
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
  operationoutcome,
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
  visionprescription,
};
