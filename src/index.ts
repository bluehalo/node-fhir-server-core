import * as http from 'http'
const debug = require('debug')('asy-fhir-server:server')

import Server from './server'


const port = normalizePort(process.env.PORT || 3000)
Server.set('port', port)

const srv = http.createServer(Server)
srv.listen(port)
srv.on('error', onError)
srv.on('listening', onListening)

function normalizePort(val: number|string): number|string|boolean {
	let port: number = (typeof val === 'string') ? parseInt(val, 10) : val
	if (isNaN(port)) {
		return val
	}
	else if (port >= 0) {
		return port
	}
	else {
		return false
	}
}

function onError(error: NodeJS.ErrnoException): void {
	if (error.syscall !== 'listen') throw error
	let bind = (typeof port === 'string') ? `Pipe ${port}` : `Port ${port}`
	switch (error.code) {
		case 'EACCES':
			console.error(`${bind} requires elevated privileges`)
			process.exit(1)
			break
		case 'EADDRINUSE':
			console.error(`${bind} is already in use`)
			process.exit(1)
			break
		default:
			throw error
	}
}

function onListening(): void {
	let addr = srv.address();
	let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`
	debug(`Listening on ${bind}`)
}