module.exports = class order {
    constructor(con) {
        this.con = con
    }

    getBin(bin_id){
        return new Promise( (resolve, reject) => {
            try {
                let sel = `SELECT * FROM bin WHERE bin_id ='${bin_id}'`;
                this.con.query(sel, (err, result) => {
                    resolve(result)
                })
            } catch (error) {
                reject(error)
            }
        })
    }
}