import {Router, Request, Response, NextFunction} from 'express'

class ExampleRouter {
	router: Router

	constructor() {
		this.router = Router()
		this.init()
	}

	public helloWorld(req: Request, res: Response, next: NextFunction) {
		res.json({
			message: 'Hello World!'
		})
	}

	init() {
		this.router.get('/', this.helloWorld)
	}
}

function initRoutes(router: ExampleRouter) {
	router.init()
	return router.router
}

export default initRoutes(new ExampleRouter())
