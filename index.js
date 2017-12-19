// const axios = require('axios');

// const service = {
//     getItems: () => axios({ 'url': 'http://127.0.0.1/ecio_cloud/index.php/receive_data/getuser' }),
//     getUsers: () => axios({ 'url': 'http://127.0.0.1/ecio_cloud/index.php/receive_data/room_status' })
    // getItems: () => {
    //     setTimeout(() => {
    //         console.log('function getItems')
    //     }, 100);
    // },

    // getUsers: () => {
    //     setTimeout(() => {
    //         console.log('function getUsers')
    //     }, 2000);
    // }

// }

// async function exple() {
//     try {
//         const users = await service.getUsers()
//         const items = await service.getItems()

//         console.log('Ex Async & Await',{
//             items: items.data,
//             users: users.data
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

// exple();

async function aaa() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("use func aaa()");
            }, 100);
        } catch (error) {
            reject(error)
        }
    })
}

async function bbb(params) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(`${params} use fun bbb()`)
            }, 200);
        } catch (error) {
            reject(error)
        }
    })
}

async function main(){
    let val = await aaa();
    let result = await bbb(val);
    console.log(result);
}

main();