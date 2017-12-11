const mongoose = require('mongoose');
const helper = require('../tools/draw-helper')();
const mailer = require('../tools/mailer')();

module.exports = app => {
    let api = {};

    api.draw = people => {
        
        let arrPromise = [];
        let naoSorteados = people.map(item => { return item});
        
        for(let i = 0; i < people.length; i++){

            arrPromise.push(new Promise((resolve, reject) => {

                let goNext = helper.chooseOne(naoSorteados, people[i]);
    
                if(goNext){
                    resolve();    
                } else {
                    i=people.length;
                    reject(0);                    
                }
            }));
        }

        return new Promise((resolve, reject) => {

            Promise.all(arrPromise)
            .then( success => {
    
                mailer.sendMail(people)
                .then( success => resolve(204))
                .catch( err => reject({code: 500, msg: err}));
            })
            .catch( err => {
                if(err == 0) api.draw(people);
                else reject({code: 500, msg: err});
            });
        });
    };
    
    return api;
}