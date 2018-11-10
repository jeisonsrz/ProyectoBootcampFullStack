const controllerPets = require('../controllers/pets');

module.exports = (app) => {
    
    app.get('/pets', controllerPets.allPets);
    app.post('/createpet', controllerPets.createPet);
    app.post('/updatepet', controllerPets.updatePet);
    app.post('/delatepet', controllerPets.delatePet);
 /*   app.post('/users', controllerUser.postUsers);
    app.post('/usersEdit', controllerUser.postEditUsers);
    app.post('/usersDelet', controllerUser.postDeletUsers);*/
}