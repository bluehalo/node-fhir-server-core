const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Quantity = require('./Quantity');

class Sequence_Quality extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Sequence_Quality';
	}

	// INDEL / SNP / Undefined variant.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['indel', 'snp', 'unknown'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// Gold standard sequence used for comparing against.
	get standardSequence () {
		return this._standardSequence;
	}

	set standardSequence ( new_value ) {
		this._standardSequence = new CodeableConcept(new_value);
	}

	// Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
	get start () {
		return this._start;
	}

	set start ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field start`);
		}
		this._start = new_value;
	}

	// End position of the sequence.If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
	get end () {
		return this._end;
	}

	set end ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field end`);
		}
		this._end = new_value;
	}

	// The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).
	get score () {
		return this._score;
	}

	set score ( new_value ) {
		this._score = new Quantity(new_value);
	}

	// Which method is used to get sequence quality.
	get method () {
		return this._method;
	}

	set method ( new_value ) {
		this._method = new CodeableConcept(new_value);
	}

	// True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
	get truthTP () {
		return this._truthTP;
	}

	set truthTP ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field truthTP`);
		}
		this._truthTP = new_value;
	}

	// True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
	get queryTP () {
		return this._queryTP;
	}

	set queryTP ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field queryTP`);
		}
		this._queryTP = new_value;
	}

	// False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.
	get truthFN () {
		return this._truthFN;
	}

	set truthFN ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field truthFN`);
		}
		this._truthFN = new_value;
	}

	// False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.
	get queryFP () {
		return this._queryFP;
	}

	set queryFP ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field queryFP`);
		}
		this._queryFP = new_value;
	}

	// The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).
	get gtFP () {
		return this._gtFP;
	}

	set gtFP ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field gtFP`);
		}
		this._gtFP = new_value;
	}

	// QUERY.TP / (QUERY.TP + QUERY.FP).
	get precision () {
		return this._precision;
	}

	set precision ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field precision`);
		}
		this._precision = new_value;
	}

	// TRUTH.TP / (TRUTH.TP + TRUTH.FN).
	get recall () {
		return this._recall;
	}

	set recall ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field recall`);
		}
		this._recall = new_value;
	}

	// Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).
	get fScore () {
		return this._fScore;
	}

	set fScore ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field fScore`);
		}
		this._fScore = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			standardSequence: this._standardSequence,
			start: this._start,
			end: this._end,
			score: this._score,
			method: this._method,
			truthTP: this._truthTP,
			queryTP: this._queryTP,
			truthFN: this._truthFN,
			queryFP: this._queryFP,
			gtFP: this._gtFP,
			precision: this._precision,
			recall: this._recall,
			fScore: this._fScore
		});
	}

}

module.exports = Sequence_Quality;
