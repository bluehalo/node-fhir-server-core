const DomainResource = require('./DomainResource');

class Sequence extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Sequence';
		Object.assign(this, opt);
	}

	// This is a Sequence resource
	static get __resourceType() {
		return 'Sequence';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Sequence = new_value;
	}

	// A unique identifier for this particular sequence instance. This is a FHIR-defined id.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Amino Acid Sequence/ DNA Sequence / RNA Sequence.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).
	get coordinateSystem() {
		return this.__coordinateSystem;
	}

	set coordinateSystem(new_value) {
		this.__coordinateSystem = new_value;
	}

	// The patient whose sequencing results are described by this resource.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// Specimen used for sequencing.
	get specimen() {
		return this.__specimen;
	}

	set specimen(new_value) {
		const Reference = require('./Reference');
		this.__specimen = new Reference(new_value);
	}

	// The method for sequencing, for example, chip information.
	get device() {
		return this.__device;
	}

	set device(new_value) {
		const Reference = require('./Reference');
		this.__device = new Reference(new_value);
	}

	// The organization or lab that should be responsible for this result.
	get performer() {
		return this.__performer;
	}

	set performer(new_value) {
		const Reference = require('./Reference');
		this.__performer = new Reference(new_value);
	}

	// The number of copies of the seqeunce of interest. (RNASeq).
	get quantity() {
		return this.__quantity;
	}

	set quantity(new_value) {
		const Quantity = require('./Quantity');
		this.__quantity = new Quantity(new_value);
	}

	// A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
	get referenceSeq() {
		return this.__referenceSeq;
	}

	set referenceSeq(new_value) {
		const SequenceReferenceSeq = require('./SequenceReferenceSeq');
		this.__referenceSeq = new SequenceReferenceSeq(new_value);
	}

	// The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
	get variant() {
		return this.__variant;
	}

	set variant(new_value) {
		const SequenceVariant = require('./SequenceVariant');
		this.__variant = Array.isArray(new_value)
			? new_value.map(val => new SequenceVariant(val))
			: [new SequenceVariant(new_value)];
	}

	// Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall starts from referenceSeq.windowStart and end by referenceSeq.windowEnd.
	get observedSeq() {
		return this.__observedSeq;
	}

	set observedSeq(new_value) {
		this.__observedSeq = new_value;
	}

	// An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
	get quality() {
		return this.__quality;
	}

	set quality(new_value) {
		const SequenceQuality = require('./SequenceQuality');
		this.__quality = Array.isArray(new_value)
			? new_value.map(val => new SequenceQuality(val))
			: [new SequenceQuality(new_value)];
	}

	// Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.
	get readCoverage() {
		return this.__readCoverage;
	}

	set readCoverage(new_value) {
		this.__readCoverage = new_value;
	}

	// Configurations of the external repository. The repository shall store target\'s observedSeq or records related with target\'s observedSeq.
	get repository() {
		return this.__repository;
	}

	set repository(new_value) {
		const SequenceRepository = require('./SequenceRepository');
		this.__repository = Array.isArray(new_value)
			? new_value.map(val => new SequenceRepository(val))
			: [new SequenceRepository(new_value)];
	}

	// Pointer to next atomic sequence which at most contains one variant.
	get pointer() {
		return this.__pointer;
	}

	set pointer(new_value) {
		const Reference = require('./Reference');
		this.__pointer = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			type: this.__type,
			coordinateSystem: this.__coordinateSystem,
			patient: this.__patient && this.__patient.toJSON(),
			specimen: this.__specimen && this.__specimen.toJSON(),
			device: this.__device && this.__device.toJSON(),
			performer: this.__performer && this.__performer.toJSON(),
			quantity: this.__quantity && this.__quantity.toJSON(),
			referenceSeq: this.__referenceSeq && this.__referenceSeq.toJSON(),
			variant: this.__variant && this.__variant.map(v => v.toJSON()),
			observedSeq: this.__observedSeq,
			quality: this.__quality && this.__quality.map(v => v.toJSON()),
			readCoverage: this.__readCoverage,
			repository: this.__repository && this.__repository.map(v => v.toJSON()),
			pointer: this.__pointer && this.__pointer.map(v => v.toJSON()),
		});
	}
}

module.exports = Sequence;
