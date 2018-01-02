class Extension {

	// url		1..1	uri	identifies the meaning of the value
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// value[x]		0..1	*	Value of value
	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	toJSON() {
		return {
			url: this._url,
			value: this._value
		};
	}
}

module.exports = Extension;




