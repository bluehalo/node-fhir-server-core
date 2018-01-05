const path = require('path');
const Code = require(path.resolve('./src/server/resources/types/Code'));

class Coding {
	constructor(obj) {
		Object.assign(this, obj);
	}

	//system	Σ	0..1	uri	Identity of the terminology system
	set system(system) {
		this._system = system;
	}

	get system() {
		return this.system_system;
	}
	// version	Σ	0..1	string	Version of the system - if relevant
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// code	Σ	0..1	code	Symbol in syntax defined by the system
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// display	Σ	0..1	string	Representation defined by the system
	set display(display) {
		this._display = display;
	}

	get display() {
		return this._display;
	}

	// userSelected	Σ	0..1	boolean
	set userSelected(userSelected) {
		this._userSelected = userSelected;
	}

	get userSelected() {
		return this._userSelected;
	}

	toJSON() {
		return {
			system: this._system,
			version: this._version,
			code: this._code,
			display: this._display,
			userSelected: this._userSelected
		};
	}
}

module.exports = Coding;
