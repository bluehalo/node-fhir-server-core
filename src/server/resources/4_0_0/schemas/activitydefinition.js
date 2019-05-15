/**
 * @name exports
 * @summary ActivityDefinition Class
 */
module.exports = class ActivityDefinition {
	constructor(opts) {
		// Create an object to store all props
		Object.defineProperty(this, '__data', { value: {} });

		// Define getters and setters as enumerable

		Object.defineProperty(this, '_id', {
			enumerable: true,
			get: () => this.__data._id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._id = new Element(value);
			},
		});

		Object.defineProperty(this, 'id', {
			enumerable: true,
			get: () => this.__data.id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.id = value;
			},
		});

		Object.defineProperty(this, 'meta', {
			enumerable: true,
			get: () => this.__data.meta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.meta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_implicitRules', {
			enumerable: true,
			get: () => this.__data._implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._implicitRules = new Element(value);
			},
		});

		Object.defineProperty(this, 'implicitRules', {
			enumerable: true,
			get: () => this.__data.implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.implicitRules = value;
			},
		});

		Object.defineProperty(this, '_language', {
			enumerable: true,
			get: () => this.__data._language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._language = new Element(value);
			},
		});

		Object.defineProperty(this, 'language', {
			enumerable: true,
			get: () => this.__data.language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.language = value;
			},
		});

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Narrative = require('./narrative.js');
				this.__data.text = new Narrative(value);
			},
		});

		Object.defineProperty(this, 'contained', {
			enumerable: true,
			get: () => this.__data.contained,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contained = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'extension', {
			enumerable: true,
			get: () => this.__data.extension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.extension = Array.isArray(value) ? value.map(v => new Extension(v)) : [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'modifierExtension', {
			enumerable: true,
			get: () => this.__data.modifierExtension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.modifierExtension = Array.isArray(value)
					? value.map(v => new Extension(v))
					: [new Extension(value)];
			},
		});

		Object.defineProperty(this, '_url', {
			enumerable: true,
			get: () => this.__data._url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._url = new Element(value);
			},
		});

		Object.defineProperty(this, 'url', {
			enumerable: true,
			get: () => this.__data.url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.url = value;
			},
		});

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.identifier = Array.isArray(value) ? value.map(v => new Identifier(v)) : [new Identifier(value)];
			},
		});

		Object.defineProperty(this, '_version', {
			enumerable: true,
			get: () => this.__data._version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._version = new Element(value);
			},
		});

		Object.defineProperty(this, 'version', {
			enumerable: true,
			get: () => this.__data.version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.version = value;
			},
		});

		Object.defineProperty(this, '_name', {
			enumerable: true,
			get: () => this.__data._name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._name = new Element(value);
			},
		});

		Object.defineProperty(this, 'name', {
			enumerable: true,
			get: () => this.__data.name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.name = value;
			},
		});

		Object.defineProperty(this, '_title', {
			enumerable: true,
			get: () => this.__data._title,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._title = new Element(value);
			},
		});

		Object.defineProperty(this, 'title', {
			enumerable: true,
			get: () => this.__data.title,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.title = value;
			},
		});

		Object.defineProperty(this, '_subtitle', {
			enumerable: true,
			get: () => this.__data._subtitle,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._subtitle = new Element(value);
			},
		});

		Object.defineProperty(this, 'subtitle', {
			enumerable: true,
			get: () => this.__data.subtitle,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.subtitle = value;
			},
		});

		Object.defineProperty(this, '_status', {
			enumerable: true,
			get: () => this.__data._status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._status = new Element(value);
			},
		});

		Object.defineProperty(this, 'status', {
			enumerable: true,
			get: () => this.__data.status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.status = value;
			},
		});

		Object.defineProperty(this, '_experimental', {
			enumerable: true,
			get: () => this.__data._experimental,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._experimental = new Element(value);
			},
		});

		Object.defineProperty(this, 'experimental', {
			enumerable: true,
			get: () => this.__data.experimental,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.experimental = value;
			},
		});

		Object.defineProperty(this, 'subjectCodeableConcept', {
			enumerable: true,
			get: () => this.__data.subjectCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.subjectCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'subjectReference', {
			enumerable: true,
			get: () => this.__data.subjectReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.subjectReference = new Reference(value);
			},
		});

		Object.defineProperty(this, '_date', {
			enumerable: true,
			get: () => this.__data._date,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._date = new Element(value);
			},
		});

		Object.defineProperty(this, 'date', {
			enumerable: true,
			get: () => this.__data.date,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.date = value;
			},
		});

		Object.defineProperty(this, '_publisher', {
			enumerable: true,
			get: () => this.__data._publisher,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._publisher = new Element(value);
			},
		});

		Object.defineProperty(this, 'publisher', {
			enumerable: true,
			get: () => this.__data.publisher,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.publisher = value;
			},
		});

		Object.defineProperty(this, 'contact', {
			enumerable: true,
			get: () => this.__data.contact,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactDetail = require('./contactdetail.js');
				this.__data.contact = Array.isArray(value) ? value.map(v => new ContactDetail(v)) : [new ContactDetail(value)];
			},
		});

		Object.defineProperty(this, '_description', {
			enumerable: true,
			get: () => this.__data._description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._description = new Element(value);
			},
		});

		Object.defineProperty(this, 'description', {
			enumerable: true,
			get: () => this.__data.description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.description = value;
			},
		});

		Object.defineProperty(this, 'useContext', {
			enumerable: true,
			get: () => this.__data.useContext,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let UsageContext = require('./usagecontext.js');
				this.__data.useContext = Array.isArray(value) ? value.map(v => new UsageContext(v)) : [new UsageContext(value)];
			},
		});

		Object.defineProperty(this, 'jurisdiction', {
			enumerable: true,
			get: () => this.__data.jurisdiction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.jurisdiction = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_purpose', {
			enumerable: true,
			get: () => this.__data._purpose,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._purpose = new Element(value);
			},
		});

		Object.defineProperty(this, 'purpose', {
			enumerable: true,
			get: () => this.__data.purpose,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.purpose = value;
			},
		});

		Object.defineProperty(this, '_usage', {
			enumerable: true,
			get: () => this.__data._usage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._usage = new Element(value);
			},
		});

		Object.defineProperty(this, 'usage', {
			enumerable: true,
			get: () => this.__data.usage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.usage = value;
			},
		});

		Object.defineProperty(this, '_copyright', {
			enumerable: true,
			get: () => this.__data._copyright,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._copyright = new Element(value);
			},
		});

		Object.defineProperty(this, 'copyright', {
			enumerable: true,
			get: () => this.__data.copyright,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.copyright = value;
			},
		});

		Object.defineProperty(this, '_approvalDate', {
			enumerable: true,
			get: () => this.__data._approvalDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._approvalDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'approvalDate', {
			enumerable: true,
			get: () => this.__data.approvalDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.approvalDate = value;
			},
		});

		Object.defineProperty(this, '_lastReviewDate', {
			enumerable: true,
			get: () => this.__data._lastReviewDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._lastReviewDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'lastReviewDate', {
			enumerable: true,
			get: () => this.__data.lastReviewDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.lastReviewDate = value;
			},
		});

		Object.defineProperty(this, 'effectivePeriod', {
			enumerable: true,
			get: () => this.__data.effectivePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.effectivePeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'topic', {
			enumerable: true,
			get: () => this.__data.topic,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.topic = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'author', {
			enumerable: true,
			get: () => this.__data.author,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactDetail = require('./contactdetail.js');
				this.__data.author = Array.isArray(value) ? value.map(v => new ContactDetail(v)) : [new ContactDetail(value)];
			},
		});

		Object.defineProperty(this, 'editor', {
			enumerable: true,
			get: () => this.__data.editor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactDetail = require('./contactdetail.js');
				this.__data.editor = Array.isArray(value) ? value.map(v => new ContactDetail(v)) : [new ContactDetail(value)];
			},
		});

		Object.defineProperty(this, 'reviewer', {
			enumerable: true,
			get: () => this.__data.reviewer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactDetail = require('./contactdetail.js');
				this.__data.reviewer = Array.isArray(value) ? value.map(v => new ContactDetail(v)) : [new ContactDetail(value)];
			},
		});

		Object.defineProperty(this, 'endorser', {
			enumerable: true,
			get: () => this.__data.endorser,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactDetail = require('./contactdetail.js');
				this.__data.endorser = Array.isArray(value) ? value.map(v => new ContactDetail(v)) : [new ContactDetail(value)];
			},
		});

		Object.defineProperty(this, 'relatedArtifact', {
			enumerable: true,
			get: () => this.__data.relatedArtifact,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let RelatedArtifact = require('./relatedartifact.js');
				this.__data.relatedArtifact = Array.isArray(value)
					? value.map(v => new RelatedArtifact(v))
					: [new RelatedArtifact(value)];
			},
		});

		Object.defineProperty(this, '_library', {
			enumerable: true,
			get: () => this.__data._library,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._library = new Element(value);
			},
		});

		Object.defineProperty(this, 'library', {
			enumerable: true,
			get: () => this.__data.library,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.library = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_kind', {
			enumerable: true,
			get: () => this.__data._kind,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._kind = new Element(value);
			},
		});

		Object.defineProperty(this, 'kind', {
			enumerable: true,
			get: () => this.__data.kind,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.kind = value;
			},
		});

		Object.defineProperty(this, '_profile', {
			enumerable: true,
			get: () => this.__data._profile,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._profile = new Element(value);
			},
		});

		Object.defineProperty(this, 'profile', {
			enumerable: true,
			get: () => this.__data.profile,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.profile = value;
			},
		});

		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.code = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_intent', {
			enumerable: true,
			get: () => this.__data._intent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._intent = new Element(value);
			},
		});

		Object.defineProperty(this, 'intent', {
			enumerable: true,
			get: () => this.__data.intent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.intent = value;
			},
		});

		Object.defineProperty(this, '_priority', {
			enumerable: true,
			get: () => this.__data._priority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._priority = new Element(value);
			},
		});

		Object.defineProperty(this, 'priority', {
			enumerable: true,
			get: () => this.__data.priority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.priority = value;
			},
		});

		Object.defineProperty(this, '_doNotPerform', {
			enumerable: true,
			get: () => this.__data._doNotPerform,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._doNotPerform = new Element(value);
			},
		});

		Object.defineProperty(this, 'doNotPerform', {
			enumerable: true,
			get: () => this.__data.doNotPerform,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.doNotPerform = value;
			},
		});

		Object.defineProperty(this, 'timingTiming', {
			enumerable: true,
			get: () => this.__data.timingTiming,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.timingTiming = new Timing(value);
			},
		});

		Object.defineProperty(this, '_timingDateTime', {
			enumerable: true,
			get: () => this.__data._timingDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._timingDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'timingDateTime', {
			enumerable: true,
			get: () => this.__data.timingDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.timingDateTime = value;
			},
		});

		Object.defineProperty(this, 'timingAge', {
			enumerable: true,
			get: () => this.__data.timingAge,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Age = require('./age.js');
				this.__data.timingAge = new Age(value);
			},
		});

		Object.defineProperty(this, 'timingPeriod', {
			enumerable: true,
			get: () => this.__data.timingPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.timingPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'timingRange', {
			enumerable: true,
			get: () => this.__data.timingRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.timingRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'timingDuration', {
			enumerable: true,
			get: () => this.__data.timingDuration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.timingDuration = new Duration(value);
			},
		});

		Object.defineProperty(this, 'location', {
			enumerable: true,
			get: () => this.__data.location,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.location = new Reference(value);
			},
		});

		Object.defineProperty(this, 'participant', {
			enumerable: true,
			get: () => this.__data.participant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ActivityDefinitionParticipant = require('./activitydefinitionparticipant.js');
				this.__data.participant = Array.isArray(value)
					? value.map(v => new ActivityDefinitionParticipant(v))
					: [new ActivityDefinitionParticipant(value)];
			},
		});

		Object.defineProperty(this, 'productReference', {
			enumerable: true,
			get: () => this.__data.productReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.productReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'productCodeableConcept', {
			enumerable: true,
			get: () => this.__data.productCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.productCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'quantity', {
			enumerable: true,
			get: () => this.__data.quantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.quantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'dosage', {
			enumerable: true,
			get: () => this.__data.dosage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Dosage = require('./dosage.js');
				this.__data.dosage = Array.isArray(value) ? value.map(v => new Dosage(v)) : [new Dosage(value)];
			},
		});

		Object.defineProperty(this, 'bodySite', {
			enumerable: true,
			get: () => this.__data.bodySite,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.bodySite = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'specimenRequirement', {
			enumerable: true,
			get: () => this.__data.specimenRequirement,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.specimenRequirement = Array.isArray(value)
					? value.map(v => new Reference(v))
					: [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'observationRequirement', {
			enumerable: true,
			get: () => this.__data.observationRequirement,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.observationRequirement = Array.isArray(value)
					? value.map(v => new Reference(v))
					: [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'observationResultRequirement', {
			enumerable: true,
			get: () => this.__data.observationResultRequirement,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.observationResultRequirement = Array.isArray(value)
					? value.map(v => new Reference(v))
					: [new Reference(value)];
			},
		});

		Object.defineProperty(this, '_transform', {
			enumerable: true,
			get: () => this.__data._transform,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._transform = new Element(value);
			},
		});

		Object.defineProperty(this, 'transform', {
			enumerable: true,
			get: () => this.__data.transform,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.transform = value;
			},
		});

		Object.defineProperty(this, 'dynamicValue', {
			enumerable: true,
			get: () => this.__data.dynamicValue,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ActivityDefinitionDynamicValue = require('./activitydefinitiondynamicvalue.js');
				this.__data.dynamicValue = Array.isArray(value)
					? value.map(v => new ActivityDefinitionDynamicValue(v))
					: [new ActivityDefinitionDynamicValue(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ActivityDefinition',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ActivityDefinition';
	}

	toJSON() {
		return {
			resourceType: this.resourceType,
			id: this.id,
			meta: this.meta && this.meta.toJSON(),
			_implicitRules: this._implicitRules && this._implicitRules.toJSON(),
			implicitRules: this.implicitRules,
			_language: this._language && this._language.toJSON(),
			language: this.language,
			text: this.text && this.text.toJSON(),
			contained: this.contained,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_url: this._url && this._url.toJSON(),
			url: this.url,
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			_version: this._version && this._version.toJSON(),
			version: this.version,
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_title: this._title && this._title.toJSON(),
			title: this.title,
			_subtitle: this._subtitle && this._subtitle.toJSON(),
			subtitle: this.subtitle,
			_status: this._status && this._status.toJSON(),
			status: this.status,
			_experimental: this._experimental && this._experimental.toJSON(),
			experimental: this.experimental,
			subjectCodeableConcept: this.subjectCodeableConcept && this.subjectCodeableConcept.toJSON(),
			subjectReference: this.subjectReference && this.subjectReference.toJSON(),
			_date: this._date && this._date.toJSON(),
			date: this.date,
			_publisher: this._publisher && this._publisher.toJSON(),
			publisher: this.publisher,
			contact: this.contact && this.contact.map(v => v.toJSON()),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			useContext: this.useContext && this.useContext.map(v => v.toJSON()),
			jurisdiction: this.jurisdiction && this.jurisdiction.map(v => v.toJSON()),
			_purpose: this._purpose && this._purpose.toJSON(),
			purpose: this.purpose,
			_usage: this._usage && this._usage.toJSON(),
			usage: this.usage,
			_copyright: this._copyright && this._copyright.toJSON(),
			copyright: this.copyright,
			_approvalDate: this._approvalDate && this._approvalDate.toJSON(),
			approvalDate: this.approvalDate,
			_lastReviewDate: this._lastReviewDate && this._lastReviewDate.toJSON(),
			lastReviewDate: this.lastReviewDate,
			effectivePeriod: this.effectivePeriod && this.effectivePeriod.toJSON(),
			topic: this.topic && this.topic.map(v => v.toJSON()),
			author: this.author && this.author.map(v => v.toJSON()),
			editor: this.editor && this.editor.map(v => v.toJSON()),
			reviewer: this.reviewer && this.reviewer.map(v => v.toJSON()),
			endorser: this.endorser && this.endorser.map(v => v.toJSON()),
			relatedArtifact: this.relatedArtifact && this.relatedArtifact.map(v => v.toJSON()),
			_library: this._library && this._library.toJSON(),
			library: this.library,
			_kind: this._kind && this._kind.toJSON(),
			kind: this.kind,
			_profile: this._profile && this._profile.toJSON(),
			profile: this.profile,
			code: this.code && this.code.toJSON(),
			_intent: this._intent && this._intent.toJSON(),
			intent: this.intent,
			_priority: this._priority && this._priority.toJSON(),
			priority: this.priority,
			_doNotPerform: this._doNotPerform && this._doNotPerform.toJSON(),
			doNotPerform: this.doNotPerform,
			timingTiming: this.timingTiming && this.timingTiming.toJSON(),
			_timingDateTime: this._timingDateTime && this._timingDateTime.toJSON(),
			timingDateTime: this.timingDateTime,
			timingAge: this.timingAge && this.timingAge.toJSON(),
			timingPeriod: this.timingPeriod && this.timingPeriod.toJSON(),
			timingRange: this.timingRange && this.timingRange.toJSON(),
			timingDuration: this.timingDuration && this.timingDuration.toJSON(),
			location: this.location && this.location.toJSON(),
			participant: this.participant && this.participant.map(v => v.toJSON()),
			productReference: this.productReference && this.productReference.toJSON(),
			productCodeableConcept: this.productCodeableConcept && this.productCodeableConcept.toJSON(),
			quantity: this.quantity && this.quantity.toJSON(),
			dosage: this.dosage && this.dosage.map(v => v.toJSON()),
			bodySite: this.bodySite && this.bodySite.map(v => v.toJSON()),
			specimenRequirement: this.specimenRequirement && this.specimenRequirement.map(v => v.toJSON()),
			observationRequirement: this.observationRequirement && this.observationRequirement.map(v => v.toJSON()),
			observationResultRequirement:
				this.observationResultRequirement && this.observationResultRequirement.map(v => v.toJSON()),
			_transform: this._transform && this._transform.toJSON(),
			transform: this.transform,
			dynamicValue: this.dynamicValue && this.dynamicValue.map(v => v.toJSON()),
		};
	}
};
