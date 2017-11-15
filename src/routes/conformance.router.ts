import {Router, Request, Response, NextFunction} from 'express'

const metadata = require('../fixtures/conformance')

class ConformanceRouter {
	router: Router

	constructor() {
		this.router = Router()
		this.init()
	}

	public metadata(req: Request, res: Response, next: NextFunction) {
		res.send(metadata)
	}

	init() {
		this.router.get('/', this.metadata)
	}
}

function initRoutes(router: ConformanceRouter) {
	router.init()
	return router.router
}

export default initRoutes(new ConformanceRouter())
