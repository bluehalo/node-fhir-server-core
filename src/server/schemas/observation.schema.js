// TODO: use references
module.exports = {
	id: '/Observation',
	type: 'object',
	properties: {
		resourceType: { type: 'string' },
		id: { type: 'string' },
		meta: {
			type: 'object',
			properties: {
				versionId: { type: 'string' },
				lastUpdated: { type: 'string' }
			}
		},
		identifier: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					system: { type: 'string' },
					value: { type: 'string' }
				}
			}
		},
		status: { type: 'string' },
		category: {
			type: 'object',
			coding: {
				type: 'array',
				items: {
					type: 'object',
					properties: {
						system: { type: 'string' },
						code: { type: 'string' },
						display: { type: 'string' }
					}
				},
				text: { type: 'string' }
			}
		},
		subject: {
			type: 'object',
			properties: {
				reference: { type: 'string' }
			}
		},
		effectiveDateTime: { type: 'string' },
		valueQuantity: {
			type: 'object',
			properties: {
				value: { type: 'number' },
				unit: { type: 'string' },
				system: { type: 'string' }
			}
		},
		component: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					code: {
						type: 'object',
						properties: {
							coding: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										system: { type: 'string' },
										code: { type: 'string' },
										display: { type: 'string' }
									}
								},
								text: { type: 'string' }
							}
						}
					}
				}
			}
		}
	},
	required: ['resourceType', 'id']
};
