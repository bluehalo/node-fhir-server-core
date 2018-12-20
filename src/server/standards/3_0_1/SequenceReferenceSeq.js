const BackboneElement = require('./BackboneElement');

class SequenceReferenceSeq extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SequenceReferenceSeq';
		Object.assign(this, opt);
	}

	// This is a SequenceReferenceSeq resource
	static get __resourceType() {
		return 'SequenceReferenceSeq';
	}

	// Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
	get chromosome() {
		return this.__chromosome;
	}

	set chromosome(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__chromosome = new CodeableConcept(new_value);
	}

	// The Genome Build used for reference, following GRCh build versions e.g. \'GRCh 37\'.  Version number must be included if a versioned release of a primary build was used.
	get genomeBuild() {
		return this.__genomeBuild;
	}

	set genomeBuild(new_value) {
		this.__genomeBuild = new_value;
	}

	// Reference identifier of reference sequence submitted to NCBI. It must match the type in the Sequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences.
	get referenceSeqId() {
		return this.__referenceSeqId;
	}

	set referenceSeqId(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__referenceSeqId = new CodeableConcept(new_value);
	}

	// A Pointer to another Sequence entity as reference sequence.
	get referenceSeqPointer() {
		return this.__referenceSeqPointer;
	}

	set referenceSeqPointer(new_value) {
		const Reference = require('./Reference');
		this.__referenceSeqPointer = new Reference(new_value);
	}

	// A string like \'ACGT\'.
	get referenceSeqString() {
		return this.__referenceSeqString;
	}

	set referenceSeqString(new_value) {
		this.__referenceSeqString = new_value;
	}

	// Directionality of DNA sequence. Available values are \'1\' for the plus strand (5\' to 3\')/Watson/Sense/positive  and \'-1\' for the minus strand(3\' to 5\')/Crick/Antisense/negative.
	get strand() {
		return this.__strand;
	}

	set strand(new_value) {
		this.__strand = new_value;
	}

	// Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
	get windowStart() {
		return this.__windowStart;
	}

	set windowStart(new_value) {
		this.__windowStart = new_value;
	}

	// End position of the window on the reference sequence. If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
	get windowEnd() {
		return this.__windowEnd;
	}

	set windowEnd(new_value) {
		this.__windowEnd = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			chromosome: this.__chromosome && this.__chromosome.toJSON(),
			genomeBuild: this.__genomeBuild,
			referenceSeqId: this.__referenceSeqId && this.__referenceSeqId.toJSON(),
			referenceSeqPointer: this.__referenceSeqPointer && this.__referenceSeqPointer.toJSON(),
			referenceSeqString: this.__referenceSeqString,
			strand: this.__strand,
			windowStart: this.__windowStart,
			windowEnd: this.__windowEnd,
		});
	}
}

module.exports = SequenceReferenceSeq;
