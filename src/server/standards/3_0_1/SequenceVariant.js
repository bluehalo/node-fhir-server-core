const BackboneElement = require('./BackboneElement');

class SequenceVariant extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SequenceVariant';
		Object.assign(this, opt);
	}

	// This is a SequenceVariant resource
	static get __resourceType() {
		return 'SequenceVariant';
	}

	// Start position of the variant on the  reference sequence.If the coordinate system is either 0-based or 1-based, then start position is inclusive.
	get start() {
		return this.__start;
	}

	set start(new_value) {
		this.__start = new_value;
	}

	// End position of the variant on the reference sequence.If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
	get end() {
		return this.__end;
	}

	set end(new_value) {
		this.__end = new_value;
	}

	// An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
	get observedAllele() {
		return this.__observedAllele;
	}

	set observedAllele(new_value) {
		this.__observedAllele = new_value;
	}

	// An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
	get referenceAllele() {
		return this.__referenceAllele;
	}

	set referenceAllele(new_value) {
		this.__referenceAllele = new_value;
	}

	// Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).
	get cigar() {
		return this.__cigar;
	}

	set cigar(new_value) {
		this.__cigar = new_value;
	}

	// A pointer to an Observation containing variant information.
	get variantPointer() {
		return this.__variantPointer;
	}

	set variantPointer(new_value) {
		const Reference = require('./Reference');
		this.__variantPointer = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			start: this.__start,
			end: this.__end,
			observedAllele: this.__observedAllele,
			referenceAllele: this.__referenceAllele,
			cigar: this.__cigar,
			variantPointer: this.__variantPointer && this.__variantPointer.toJSON(),
		});
	}
}

module.exports = SequenceVariant;
