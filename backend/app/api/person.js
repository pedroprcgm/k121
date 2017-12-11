const mongoose = require('mongoose');

module.exports = app => {
    let api = {};

    api.add = person => {
        let personModel = mongoose.model('Person');         

        return new Promise( (resolve, reject) => {
            personModel.create(person)
            .then( personAdd => {
                resolve(personAdd)
            })
            .catch( err => {
                let returnErr = {};
                if(err.name === 'ValidationError') {
                    returnErr = {code: 400, msg: err.errors};
                } else {
                    returnErr = {code: 500, msg: err};
                }
                reject(returnErr);
            });
        });
    };


    api.getAll = () => {
        let personModel = mongoose.model('Person');

        return new Promise((resolve, reject) => {
            personModel.find()
            .then( people => resolve(people))
            .catch( err => reject({code: 500, msg: err}))
        });
    
    };


    api.update = (id, person) => {

        let personModel = mongoose.model('Person');

        return new Promise((resolve, reject) => {  
            personModel.update({_id: id}, person)
            .then( success => resolve())
            .catch( err => reject({code: 500, msg: err}))
        });
    };


    api.delete = id => {

        let personModel = mongoose.model('Person');

        return new Promise((resolve, reject) => {
            personModel.remove({_id: id})
            .then( success => resolve())
            .catch( err => reject({code: 500, msg: err}))
        });
    };

    return api;
}