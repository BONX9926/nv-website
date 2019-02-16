const UserController = require('./controllres/UserController')

module.exports = (app) => {
    /* RESFUL api user manegement */
    // create user
    app.post('/user',
        UserController.create
    )

    // update user
    app.put('/user/:userId',
        UserController.put
    )

    // delete user
    app.delete('/user/:userId',
        UserController.remove
    )

    // get user by id
    app.get('/user/:userId',
        UserController.show
    )

    // get all user
    app.get('/users',
        UserController.index
    )
}