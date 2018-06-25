const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class Sequence_ReferenceSeq extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Sequence_ReferenceSeq';
	}

	// Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
	get chromosome () {
		return this._chromosome;
	}

	set chromosome ( new_value ) {
		this._chromosome = new CodeableConcept(new_value);
	}

	// The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.  Version number must be included if a versioned release of a primary build was used.
	get genomeBuild () {
		return this._genomeBuild;
	}

	set genomeBuild ( new_value ) {
		this._genomeBuild = new_value;
	}

	// Reference identifier of reference sequence submitted to NCBI. It must match the type in the Sequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences.
	get referenceSeqId () {
		return this._referenceSeqId;
	}

	set referenceSeqId ( new_value ) {
		this._referenceSeqId = new CodeableConcept(new_value);
	}

	// A Pointer to another Sequence entity as reference sequence.
	get referenceSeqPointer () {
		return this._referenceSeqPointer;
	}

	set referenceSeqPointer ( new_value ) {
		this._referenceSeqPointer = new Reference(new_value);
	}

	// A string like "ACGT".
	get referenceSeqString () {
		return this._referenceSeqString;
	}

	set referenceSeqString ( new_value ) {
		this._referenceSeqString = new_value;
	}

	// Directionality of DNA sequence. Available values are "1" for the plus strand (5' to 3')/Watson/Sense/positive  and "-1" for the minus strand(3' to 5')/Crick/Antisense/negative.
	get strand () {
		return this._strand;
	}

	set strand ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field strand`);
		}
		this._strand = new_value;
	}

	// Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
	get windowStart () {
		return this._windowStart;
	}

	set windowStart ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field windowStart`);
		}
		this._windowStart = new_value;
	}

	// End position of the window on the reference sequence. If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
	get windowEnd () {
		return this._windowEnd;
	}

	set windowEnd ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field windowEnd`);
		}
		this._windowEnd = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			chromosome: this._chromosome,
			genomeBuild: this._genomeBuild,
			referenceSeqId: this._referenceSeqId,
			referenceSeqPointer: this._referenceSeqPointer,
			referenceSeqString: this._referenceSeqString,
			strand: this._strand,
			windowStart: this._windowStart,
			windowEnd: this._windowEnd
		});
	}

}

module.exports = Sequence_ReferenceSeq;
