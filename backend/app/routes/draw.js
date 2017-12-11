
module.exports = app => {	
	
	const api = app.api.draw;

    let draw = (req, res) => {

        api.draw(req.body)
        .then( success => {
            res.sendStatus(success);
        })
        .catch( err => {
            res.status(err.code).json(err.msg);
        });
    };    

	app.route('/draw')
		.post(draw);

	// app.route('/sorteio/:id')
};