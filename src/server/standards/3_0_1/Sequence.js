const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const Quantity = require('./Quantity');
const Sequence_ReferenceSeq = require('./Sequence_ReferenceSeq');
const Sequence_Variant = require('./Sequence_Variant');
const Sequence_Quality = require('./Sequence_Quality');
const Sequence_Repository = require('./Sequence_Repository');

class Sequence extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Sequence';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Sequence';
	}

	// This is a Sequence resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Sequence'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// A unique identifier for this particular sequence instance. This is a FHIR-defined id.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Amino Acid Sequence/ DNA Sequence / RNA Sequence.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['aa', 'dna', 'rna'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).
	get coordinateSystem () {
		return this._coordinateSystem;
	}

	set coordinateSystem ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field coordinateSystem`);
		}
		this._coordinateSystem = new_value;
	}

	// The patient whose sequencing results are described by this resource.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// Specimen used for sequencing.
	get specimen () {
		return this._specimen;
	}

	set specimen ( new_value ) {
		this._specimen = new Reference(new_value);
	}

	// The method for sequencing, for example, chip information.
	get device () {
		return this._device;
	}

	set device ( new_value ) {
		this._device = new Reference(new_value);
	}

	// The organization or lab that should be responsible for this result.
	get performer () {
		return this._performer;
	}

	set performer ( new_value ) {
		this._performer = new Reference(new_value);
	}

	// The number of copies of the seqeunce of interest. (RNASeq).
	get quantity () {
		return this._quantity;
	}

	set quantity ( new_value ) {
		this._quantity = new Quantity(new_value);
	}

	// A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
	get referenceSeq () {
		return this._referenceSeq;
	}

	set referenceSeq ( new_value ) {
		this._referenceSeq = new Sequence_ReferenceSeq(new_value);
	}

	// The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
	get variant () {
		return this._variant;
	}

	set variant ( new_value ) {
		this._variant = Array.isArray(new_value) ? new_value.map(val => new Sequence_Variant(val)) : [new Sequence_Variant(new_value)];
	}

	// Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall starts from referenceSeq.windowStart and end by referenceSeq.windowEnd.
	get observedSeq () {
		return this._observedSeq;
	}

	set observedSeq ( new_value ) {
		this._observedSeq = new_value;
	}

	// An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
	get quality () {
		return this._quality;
	}

	set quality ( new_value ) {
		this._quality = Array.isArray(new_value) ? new_value.map(val => new Sequence_Quality(val)) : [new Sequence_Quality(new_value)];
	}

	// Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.
	get readCoverage () {
		return this._readCoverage;
	}

	set readCoverage ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field readCoverage`);
		}
		this._readCoverage = new_value;
	}

	// Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
	get repository () {
		return this._repository;
	}

	set repository ( new_value ) {
		this._repository = Array.isArray(new_value) ? new_value.map(val => new Sequence_Repository(val)) : [new Sequence_Repository(new_value)];
	}

	// Pointer to next atomic sequence which at most contains one variant.
	get pointer () {
		return this._pointer;
	}

	set pointer ( new_value ) {
		this._pointer = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			type: this._type,
			coordinateSystem: this._coordinateSystem,
			patient: this._patient && this._patient.toJSON(),
			specimen: this._specimen && this._specimen.toJSON(),
			device: this._device && this._device.toJSON(),
			performer: this._performer && this._performer.toJSON(),
			quantity: this._quantity && this._quantity.toJSON(),
			referenceSeq: this._referenceSeq && this._referenceSeq.toJSON(),
			variant: this._variant && this._variant.map(v => v.toJSON()),
			observedSeq: this._observedSeq,
			quality: this._quality && this._quality.map(v => v.toJSON()),
			readCoverage: this._readCoverage,
			repository: this._repository && this._repository.map(v => v.toJSON()),
			pointer: this._pointer && this._pointer.map(v => v.toJSON())
		});
	}

}

module.exports = Sequence;
