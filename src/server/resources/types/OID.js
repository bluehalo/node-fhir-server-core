class OID {
	constructor (oid) {
		this.oid = oid;
	}

	set oid(oid) {
		// An OID represented as a URI (RFC 3001 ); e.g. urn:oid:1.2.3.4.5
		const regex = /[0-2](\.[1-9]\d*)+/;
		if (!regex.test(oid)) {
			throw new Error('Invalid oid');
		}
		this._oid = oid;
	}

	get oid() {
		return this._oid;
	}

	toJSON() {
		return {
			oid: this._oid
		};
	}
}


module.exports = OID;
