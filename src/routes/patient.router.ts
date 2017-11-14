import {Router, Request, Response, NextFunction} from 'express'
const patients = [require('../fixtures/patient01/patient')]

class PatientRouter {
	router: Router

	constructor() {
		this.router = Router()
		this.init()
	}

	public getAll(req: Request, res: Response, next: NextFunction) {
		res.send(patients)
	}

	public getOne(req: Request, res: Response, next: NextFunction) {
		let query = req.params.id
		let patient = patients.find((patient: any) => patient.id === query)
		if (patient) {
			res.status(200)
				.send({
					message: 'Success',
					status: res.status,
					patient
				})
		}
		else {
			res.status(404)
				.send({
					message: 'No patient found with the given id.',
					status: res.status
				})
		}
	}

	init() {
		this.router.get('/', this.getAll)
		this.router.get('/:id', this.getOne)
	}
}

function initRoutes(router: PatientRouter) {
	router.init()
	return router.router
}

export default initRoutes(new PatientRouter())
