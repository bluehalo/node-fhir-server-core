class Code {
	constructor(code) {
		// call setter
		this.code = code;
	}

	set code(code) {
		// no leading or trailing whitespace
		if (code) {
			this._code = code.trim();
		}
	}

	get code() {
		return this._code;
	}

	toJSON() {
		return this._code;
	}
}

module.exports = Code;
