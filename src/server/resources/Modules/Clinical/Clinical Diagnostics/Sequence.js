const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Reference = require('./types/Reference');
const Quantity = require('./types/Quantity');
const CodeableConcept = require('./types/CodeableConcept');

class Repository {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type	Σ	1..1	code	directlink | openapi | login | oauth | other
	// repositoryType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// url	Σ	0..1	uri	URI of the repository
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// name	Σ	0..1	string	Repository's name
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// datasetId	Σ	0..1	string	Id of the dataset that used to call for dataset in repository
	set datasetId(datasetId) {
		this._datasetId = datasetId;
	}

	get datasetId() {
		return this._datasetId;
	}

	// variantsetId	Σ	0..1	string	Id of the variantset that used to call for variantset in repository
	set variantsetId(variantsetId) {
		this._variantsetId = variantsetId;
	}

	get variantsetId() {
		return this._variantsetId;
	}

	// readsetId	Σ	0..1	string	Id of the read
	set readsetId(readsetId) {
		this._readsetId = readsetId;
	}

	get readsetId() {
		return this._readsetId;
	}

	toJSON() {
		return {
			type: this._type,
			url: this._url,
			name: this._name,
			datasetId: this._datasetId,
			variantsetId: this._variantsetId,
			readsetId: this._readsetId,
		};
	}
}

class Quality {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type	Σ	1..1	code	indel | snp | unknown
	// qualityType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// standardSequence	Σ	0..1	CodeableConcept	Standard sequence for comparison
	// FDA-StandardSequence (Example)
	set standardSequence(standardSequence) {
		this._standardSequence = new CodeableConcept(standardSequence);
	}

	get standardSequence() {
		return this._standardSequence;
	}

	// start	Σ	0..1	integer	Start position of the sequence
	set start(start) {
		this._start = start;
	}

	get start() {
		return this._start;
	}

	// end	Σ	0..1	integer	End position of the sequence
	set end(end) {
		this._end = end;
	}

	get end() {
		return this._end;
	}

	// score	Σ	0..1	Quantity	Quality score for the comparison
	set score(score) {
		this._score = new Quantity(score);
	}

	get score() {
		return this._score;
	}

	// method	Σ	0..1	CodeableConcept	Method to get quality
	// FDA-Method (Example)
	set method(method) {
		this._method = new CodeableConcept(method);
	}

	get method() {
		return this._method;
	}

	// truthTP	Σ	0..1	decimal	True positives from the perspective of the truth data
	set truthTP(truthTP) {
		this._truthTP = truthTP;
	}

	get truthTP() {
		return this._truthTP;
	}

	// queryTP	Σ	0..1	decimal	True positives from the perspective of the query data
	set queryTP(queryTP) {
		this._queryTP = queryTP;
	}

	get queryTP() {
		return this._queryTP;
	}

	// truthFN	Σ	0..1	decimal	False negatives
	set truthFN(truthFN) {
		this._truthFN = truthFN;
	}

	get truthFN() {
		return this._truthFN;
	}

	// queryFP	Σ	0..1	decimal	False positives
	set queryFP(queryFP) {
		this._queryFP = queryFP;
	}

	get queryFP() {
		return this._queryFP;
	}

	// gtFP	Σ	0..1	decimal	False positives where the non-REF alleles in the Truth and Query Call Sets match
	set gtFP(gtFP) {
		this._gtFP = gtFP;
	}

	get gtFP() {
		return this._gtFP;
	}

	// precision	Σ	0..1	decimal	Precision of comparison
	set precision(precision) {
		this._precision = precision;
	}

	get precision() {
		return this._precision;
	}

	// recall	Σ	0..1	decimal	Recall of comparison
	set recall(recall) {
		this._recall = recall;
	}

	get recall() {
		return this._recall;
	}

	// fScore	Σ	0..1	decimal	F-score
	set fScore(fScore) {
		this._fScore = fScore;
	}

	get fScore() {
		return this._fScore;
	}

	toJSON() {
		return {
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
			fScore: this._fScore,
		};
	}
}

class Variant {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// start	Σ	0..1	integer	Start position of the variant on the reference sequence
	set start(start) {
		this._start = start;
	}

	get start() {
		return this._start;
	}

	// end	Σ	0..1	integer	End position of the variant on the reference sequence
	set end(end) {
		this._end = end;
	}

	get end() {
		return this._end;
	}

	// observedAllele	Σ	0..1	string	Allele that was observed
	set observedAllele(observedAllele) {
		this._observedAllele = observedAllele;
	}

	get observedAllele() {
		return this._observedAllele;
	}

	// referenceAllele	Σ	0..1	string	Allele in the reference sequence
	set referenceAllele(referenceAllele) {
		this._referenceAllele = referenceAllele;
	}

	get referenceAllele() {
		return this._referenceAllele;
	}

	// cigar	Σ	0..1	string	Extended CIGAR string for aligning the sequence with reference bases
	set cigar(cigar) {
		this._cigar = cigar;
	}

	get cigar() {
		return this._cigar;
	}

	// variantPointer	Σ	0..1	Reference(Observation)	Pointer to observed variant information
	set variantPointer(variantPointer) {
		this._variantPointer = new Reference(variantPointer);
	}

	get variantPointer() {
		return this._variantPointer;
	}

	toJSON() {
		return {
			start: this._start,
			end: this._end,
			observedAllele: this._observedAllele,
			referenceAllele: this._referenceAllele,
			cigar: this._cigar,
			variantPointer: this._variantPointer,
		};
	}
}

class ReferenceSeq {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// chromosome	Σ	0..1	CodeableConcept	Chromosome containing genetic finding
	// chromosome-human (Example)
	set chromosome(chromosome) {
		this._chromosome = new CodeableConcept(chromosome);
	}

	get chromosome() {
		return this._chromosome;
	}

	// genomeBuild	Σ	0..1	string	The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'
	set genomeBuild(genomeBuild) {
		this._genomeBuild = genomeBuild;
	}

	get genomeBuild() {
		return this._genomeBuild;
	}

	// referenceSeqId	Σ	0..1	CodeableConcept	Reference identifier
	// ENSEMBL (Example)
	set referenceSeqId(referenceSeqId) {
		this._referenceSeqId = new CodeableConcept(referenceSeqId);
	}

	get referenceSeqId() {
		return this._referenceSeqId;
	}

	// referenceSeqPointer	Σ	0..1	Reference(Sequence)	A Pointer to another Sequence entity as reference sequence
	set referenceSeqPointer(referenceSeqPointer) {
		this._referenceSeqPointer = new Reference(referenceSeqPointer);
	}

	get referenceSeqPointer() {
		return this._referenceSeqPointer;
	}

	// referenceSeqString	Σ	0..1	string	A string to represent reference sequence
	set referenceSeqString(referenceSeqString) {
		this._referenceSeqString = referenceSeqString;
	}

	get referenceSeqString() {
		return this._referenceSeqString;
	}

	// strand	Σ	0..1	integer	Directionality of DNA ( +1/-1)
	set strand(strand) {
		this._strand = strand;
	}

	get strand() {
		return this._strand;
	}

	// windowStart	Σ	1..1	integer	Start position of the window on the reference sequence
	set windowStart(windowStart) {
		this._windowStart = windowStart;
	}

	get windowStart() {
		return this._windowStart;
	}

	// windowEnd	Σ	1..1	integer	End position of the window on the reference sequence
	set windowEnd(windowEnd) {
		this._windowEnd = windowEnd;
	}

	get windowEnd() {
		return this._windowEnd;
	}

	toJSON() {
		return {
			chromosome: this._chromosome,
			genomeBuild: this._genomeBuild,
			referenceSeqId: this._referenceSeqId,
			referenceSeqPointer: this._referenceSeqPointer,
			referenceSeqString: this._referenceSeqString,
			strand: this._strand,
			windowStart: this._windowStart,
			windowEnd: this._windowEnd,
		};
	}
}

class Sequence extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Sequence';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Unique ID for this particular sequence. This is a FHIR-defined id
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// type	Σ	0..1	code	aa | dna | rna
	// sequenceType (Example)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// coordinateSystem	Σ	1..1	integer	Base number of coordinate system (0 for 0-based numbering or coordinates, inclusive start, exclusive end, 1 for 1-based numbering, inclusive start, inclusive end)
	set coordinateSystem(coordinateSystem) {
		this._coordinateSystem = coordinateSystem;
	}

	get coordinateSystem() {
		return this._coordinateSystem;
	}

	// patient	Σ	0..1	Reference(Patient)	Who and/or what this is about
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// specimen	Σ	0..1	Reference(Specimen)	Specimen used for sequencing
	set specimen(specimen) {
		this._specimen = new Reference(specimen);
	}

	get specimen() {
		return this._specimen;
	}

	// device	Σ	0..1	Reference(Device)	The method for sequencing
	set device(device) {
		this._device = new Reference(device);
	}

	get device() {
		return this._device;
	}

	// performer	Σ	0..1	Reference(Organization)	Who should be responsible for test result
	set performer(performer) {
		this._performer = new Reference(performer);
	}

	get performer() {
		return this._performer;
	}

	// quantity	Σ	0..1	Quantity	The number of copies of the seqeunce of interest. (RNASeq)
	set quantity(quantity) {
		this._quantity = new Quantity(quantity);
	}

	get quantity() {
		return this._quantity;
	}

	// observedSeq	Σ	0..1	string	Sequence that was observed
	set observedSeq(observedSeq) {
		this._observedSeq = observedSeq;
	}

	get observedSeq() {
		return this._observedSeq;
	}

	// readCoverage	Σ	0..1	integer	Average number of reads representing a given nucleotide in the reconstructed sequence
	set readCoverage(readCoverage) {
		this._readCoverage = readCoverage;
	}

	get readCoverage() {
		return this._readCoverage;
	}

	// pointer	Σ	0..*	Reference(Sequence)	Pointer to next atomic sequence
	set pointer(pointer) {
		if (Array.isArray(pointer)) {
			this._pointer = pointer.map((i) => new Reference(i));
		} else {
			this._pointer = [new Reference(pointer)];
		}
	}

	get pointer() {
		return this._pointer;
	}

	// referenceSeq	ΣI	0..1	BackboneElement	A sequence used as reference
	// + Only +1 and -1 are valid for strand
	// + GenomeBuild and chromosome must be both contained if either one of them is contained
	// + Have and only have one of the following elements in referenceSeq : 1. genomeBuild ; 2 referenceSeqId; 3. referenceSeqPointer; 4. referenceSeqString;
	set referenceSeq(referenceSeq) {
		this._referenceSeq = new ReferenceSeq(referenceSeq);
	}

	get referenceSeq() {
		return this._referenceSeq;
	}

	// variant	Σ	0..*	BackboneElement	Variant in sequence
	set variant(variant) {
		if (Array.isArray(variant)) {
			this._variant = variant.map((i) => new Variant(i));
		} else {
			this._variant = [new Variant(variant)];
		}
	}

	get variant() {
		return this._variant;
	}

	// quality	Σ	0..*	BackboneElement	An set of value as quality of sequence
	set quality(quality) {
		if (Array.isArray(quality)) {
			this._quality = quality.map((i) => new Quality(i));
		} else {
			this._quality = [new Quality(quality)];
		}
	}

	get quality() {
		return this._quality;
	}

	// repository	Σ	0..*	BackboneElement	External repository which contains detailed report related with observedSeq in this resource
	set repository(repository) {
		if (Array.isArray(repository)) {
			this._repository = repository.map((i) => new Repository(i));
		} else {
			this._repository = [new Repository(repository)];
		}
	}

	get repository() {
		return this._repository;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			type: this._type,
			coordinateSystem: this._coordinateSystem,
			patient: this._patient,
			specimen: this._specimen,
			device: this._device,
			performer: this._performer,
			quantity: this._quantity,
			observedSeq: this._observedSeq,
			readCoverage: this._readCoverage,
			pointer: this._pointer,
			referenceSeq: this._referenceSeq,
			variant: this._variant,
			quality: this._quality,
			repository: this._repository,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Sequence = Sequence;
module.exports.ReferenceSeq = ReferenceSeq;
module.exports.Variant = Variant;
module.exports.Quality = Quality;
module.exports.Repository = Repository;
