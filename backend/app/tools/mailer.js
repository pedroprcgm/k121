
var mailgun = require("mailgun-js");
var api_key = 'key-fac28dc15506313bf669eb3f8b61ef8c';
var DOMAIN = 'pedroguerreiro.com.br';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

module.exports = () => {
    
	let mailer = {};
		
	mailer.sendMail = (people) => {
		
		let arrPromise = [];

		if(people.length>0){

			people.forEach(person => {

				arrPromise.push(new Promise( (resolve, reject) => {					
					send(person)
					.then( success => {
						resolve();
					})
					.catch( err => { console.log(err); reject(err)} )
				}));
			})
		} else {
			reject("Lista de participantes precisa ser um Array");
		}
	
		return Promise.all(arrPromise);
	}


	let send = person => {
		let data = {	
			from: 'Amigo Secreto <sorteio@pedroguerreiro.com.br>',
			to: person.mail,
			subject: 'SORTEIO AMIGO SECRETO',
			html: '<h4>Olá, ' + person.name + '!</h4>O seu amigo secreto é o (a) <strong>' + person.friend + '</strong>. <br><br>Boas Festas!</br>'
		};		

		return mailgun.messages().send(data)
	}

	return mailer;
}

