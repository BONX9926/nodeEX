module.exports = class users {
    constructor(con) {
        this.con = con
    }

    getUsers() {
        return new Promise( (resolve, reject) => {
            try {
                let sel = "SELECT * FROM users";
                this.con.query(sel, (err, result) => {
                    resolve(result)
                })
            } catch (error) {
                reject(error)
            }
        })
    }
}