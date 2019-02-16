module.exports = {

    //get all user
    index(req, res) {
        res.send("Get all user")
    },

    //create user
    create(req, res) {
        res.send("Create User")
    },

    // update user
    put(req, res) {
        res.send("update user")
    },

    // delete user by id
    remove(req, res) {
        res.send("Delete user")
    },

    // get user by id
    show(req, res) {
        res.send("get user by id")
    }
}