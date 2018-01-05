const path = require('path');
const Code = require(path.resolve('./src/server/resources/types/Code'));
const Element = require(path.resolve('./src/server/resources/types/Element'));

// Attachment	Σ I		Element	Content in a format defined elsewhere
// It the Attachment has data, it SHALL have a contentType
class Attachment extends Element {
	// contentType	Σ	0..1	code	Mime type of the content, with charset etc.
	// MimeType  (Required)
	set contentType(contentType) {
		this._contentType = new Code(contentType);
	}

	get contentType() {
		return this._contentType;
	}

	// language	Σ	0..1	code	Human language of the content (BCP-47)
	// Language  (Required)
	set language(language) {
		this._language = new Code(language);
	}

	get language() {
		return this._language;
	}

	// data	Σ	0..1	base64Binary	Data inline, base64ed
	set data(data) {
		this._data = data;
	}

	get data() {
		return this._data;
	}

	// url	Σ	0..1	uri	Uri where the data can be found
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// size	Σ	0..1	unsignedInt	Number of bytes of content (if url provided)
	set size(size) {
		this._size = size;
	}

	// hash	Σ	0..1	base64Binary	Hash of the data (sha-1, base64ed)
	set hash(hash) {
		this._hash = hash;
	}

	// title	Σ	0..1	string	Label to display in place of the data
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
	}

	// creation	Σ	0..1	dateTime	Date attachment was first created
	set creation(creation) {
		this._creation = creation;
	}

	get creation() {
		return this.creation;
	}

	toJSON() {
		const json = {
			contentType: this._contentType,
			language: this._language,
			data: this._data,
			url: this._url,
			size: this._size,
			title: this._title,
			creation: this._creation
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Attachment;
