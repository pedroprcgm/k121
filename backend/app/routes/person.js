
module.exports = function(app) {	
	
	const api = app.api.person;


	let getAll = (req, res) => {

		api.getAll()
		.then( people => res.json(people))
		.catch( err => res.status(err.code).json(err.msg))
	} 
	

	let add = (req, res) => {
	
		api.add(req.body)
		.then( personAdd => res.json(personAdd))
		.catch( err => res.status(err.code).json(err.msg))
	}	


	let update = (req, res) => {

		api.update(req.params.id, req.body)
		.then( success => res.sendStatus(204))
		.catch( err => res.status(err.code).json(err))
	}


	let del = (req, res) => {
		
		api.delete(req.params.id)
		.then( success => res.sendStatus(204))
		.catch( err => res.status(err.code).json(err))		
	}


	app.route('/person')
	.get(getAll)
	.post(add);
	
	app.route('/person/:id')
	.put(update)
	.delete(del);
};