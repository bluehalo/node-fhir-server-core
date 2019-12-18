jest.mock('compression', () => jest.fn());
jest.mock('helmet', () => jest.fn());
jest.mock('express', () => {
	let mock = jest.fn(() => ({
		use: jest.fn(),
		set: jest.fn(),
		get: jest.fn(),
		listen: jest.fn(),
	}));
	// Mock the static directory function
	mock.static = jest.fn();
	return mock;
});

// Mock express and body parser
jest.mock('body-parser', () => ({
	urlencoded: jest.fn(),
	json: jest.fn(),
}));

jest.mock('express', () => {
	let mock = jest.fn(() => ({
		use: jest.fn(),
		set: jest.fn(),
		get: jest.fn(),
		listen: jest.fn(),
	}));
	// Mock the static directory function
	mock.static = jest.fn();
	return mock;
});

// // Mock our logger
// jest.mock('./winston.js', () => {
// 	let logger = { info: jest.fn() };
// 	let map = new Map();
// 	// We need an application logger with an info method
// 	map.set('default', logger);
// 	return map;
// });

const compression = require('compression');
const bodyParser = require('body-parser');
const Server = require('./server.js');
const helmet = require('helmet');
const winston = require('winston');

// npm express

describe('Server Class', () => {
	let server;

	beforeAll(() => {
		server = new Server({
			profiles: {
				Patient: {
					service: './src/server/service.mock.js',
					versions: ['4_0_0'],
				},
			},
		});
	});

	beforeEach(() => {
		jest.resetAllMocks();
	});

	test('Method: constructor', () => {
		expect(server.app).toBeDefined();
	});

	test('Method: configureMiddleware', () => {
		let set = jest.spyOn(server.app, 'set');
		let use = jest.spyOn(server.app, 'use');
		// Setup our middleware
		server.configureMiddleware();

		expect(set).toHaveBeenCalledTimes(1);
		expect(set.mock.calls[0][0]).toBe('showStackError');
		expect(set.mock.calls[0][1]).toBe(true);

		expect(use).toHaveBeenCalledTimes(5);
		expect(bodyParser.urlencoded).toHaveBeenCalledTimes(1);
		expect(bodyParser.json).toHaveBeenCalledTimes(1);
		expect(compression).toHaveBeenCalledTimes(1);
	});

	test('Method: configureHelmet', () => {
		let use = jest.spyOn(server.app, 'use');
		// Setup logstream
		server.configureHelmet();
		expect(use).toHaveBeenCalledTimes(1);
		expect(helmet).toHaveBeenCalledTimes(1);
	});

	test('Method: configureSession', () => {
		// Setup session, empty for now
		server.configureSession();
	});

	test('Method: configureLoggers', done => {
		server.configureLoggers((container, transports) => {
			expect(container).toBeInstanceOf(winston.Container);
			expect(Object.keys(transports)).toContain('Console');
			done();
		});
	});

	test('Method: listen', () => {
		server.listen = jest.fn();
		let listen = jest.spyOn(server, 'listen');
		let callback = jest.fn();
		// Start listening on a port and pass the callback through
		server.listen(3000, callback);
		expect(listen).toHaveBeenCalledTimes(1);
		expect(listen.mock.calls[0][0]).toBe(3000);
		expect(listen.mock.calls[0][1]).toBe(callback);
	});
});
