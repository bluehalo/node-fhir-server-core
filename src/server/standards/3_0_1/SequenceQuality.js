const BackboneElement = require('./BackboneElement');

class SequenceQuality extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SequenceQuality';
		Object.assign(this, opt);
	}

	// This is a SequenceQuality resource
	static get __resourceType() {
		return 'SequenceQuality';
	}

	// INDEL / SNP / Undefined variant.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// Gold standard sequence used for comparing against.
	get standardSequence() {
		return this.__standardSequence;
	}

	set standardSequence(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__standardSequence = new CodeableConcept(new_value);
	}

	// Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
	get start() {
		return this.__start;
	}

	set start(new_value) {
		this.__start = new_value;
	}

	// End position of the sequence.If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
	get end() {
		return this.__end;
	}

	set end(new_value) {
		this.__end = new_value;
	}

	// The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).
	get score() {
		return this.__score;
	}

	set score(new_value) {
		const Quantity = require('./Quantity');
		this.__score = new Quantity(new_value);
	}

	// Which method is used to get sequence quality.
	get method() {
		return this.__method;
	}

	set method(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__method = new CodeableConcept(new_value);
	}

	// True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
	get truthTP() {
		return this.__truthTP;
	}

	set truthTP(new_value) {
		this.__truthTP = new_value;
	}

	// True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
	get queryTP() {
		return this.__queryTP;
	}

	set queryTP(new_value) {
		this.__queryTP = new_value;
	}

	// False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.
	get truthFN() {
		return this.__truthFN;
	}

	set truthFN(new_value) {
		this.__truthFN = new_value;
	}

	// False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.
	get queryFP() {
		return this.__queryFP;
	}

	set queryFP(new_value) {
		this.__queryFP = new_value;
	}

	// The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).
	get gtFP() {
		return this.__gtFP;
	}

	set gtFP(new_value) {
		this.__gtFP = new_value;
	}

	// QUERY.TP / (QUERY.TP + QUERY.FP).
	get precision() {
		return this.__precision;
	}

	set precision(new_value) {
		this.__precision = new_value;
	}

	// TRUTH.TP / (TRUTH.TP + TRUTH.FN).
	get recall() {
		return this.__recall;
	}

	set recall(new_value) {
		this.__recall = new_value;
	}

	// Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).
	get fScore() {
		return this.__fScore;
	}

	set fScore(new_value) {
		this.__fScore = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			standardSequence: this.__standardSequence && this.__standardSequence.toJSON(),
			start: this.__start,
			end: this.__end,
			score: this.__score && this.__score.toJSON(),
			method: this.__method && this.__method.toJSON(),
			truthTP: this.__truthTP,
			queryTP: this.__queryTP,
			truthFN: this.__truthFN,
			queryFP: this.__queryFP,
			gtFP: this.__gtFP,
			precision: this.__precision,
			recall: this.__recall,
			fScore: this.__fScore,
		});
	}
}

module.exports = SequenceQuality;
