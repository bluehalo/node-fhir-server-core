import * as express from 'express'
import * as logger from 'morgan'
import * as bodyParser from 'body-parser'

// import ExampleRouter from './routes/_example.router'
import ConformanceRouter from './routes/conformance.router'
import PatientRouter from './routes/patient.router'

class Server {

	public express: any /* the @types/express express.Application type is broken */

	constructor() {
		this.express = express()
		this.middleware()
		this.routes()
	}

	private middleware(): void {
		this.express.use(logger('dev'))
		this.express.use(bodyParser.json())
		this.express.use(bodyParser.urlencoded({ extended: false }))
	}

	private routes(): void {
		// this.express.use('/', ExampleRouter)
		this.express.use('/metadata', ConformanceRouter)
		this.express.use('/api/v1/patients', PatientRouter)
	}

}
export default new Server().express
