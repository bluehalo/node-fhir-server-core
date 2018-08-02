const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class Sequence_Variant extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Sequence_Variant';
	}

	// Start position of the variant on the  reference sequence.If the coordinate system is either 0-based or 1-based, then start position is inclusive.
	get start () {
		return this._start;
	}

	set start ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field start`);
		}
		this._start = new_value;
	}

	// End position of the variant on the reference sequence.If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
	get end () {
		return this._end;
	}

	set end ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field end`);
		}
		this._end = new_value;
	}

	// An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
	get observedAllele () {
		return this._observedAllele;
	}

	set observedAllele ( new_value ) {
		this._observedAllele = new_value;
	}

	// An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
	get referenceAllele () {
		return this._referenceAllele;
	}

	set referenceAllele ( new_value ) {
		this._referenceAllele = new_value;
	}

	// Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).
	get cigar () {
		return this._cigar;
	}

	set cigar ( new_value ) {
		this._cigar = new_value;
	}

	// A pointer to an Observation containing variant information.
	get variantPointer () {
		return this._variantPointer;
	}

	set variantPointer ( new_value ) {
		this._variantPointer = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			start: this._start,
			end: this._end,
			observedAllele: this._observedAllele,
			referenceAllele: this._referenceAllele,
			cigar: this._cigar,
			variantPointer: this._variantPointer && this._variantPointer.toJSON()
		});
	}

}

module.exports = Sequence_Variant;
