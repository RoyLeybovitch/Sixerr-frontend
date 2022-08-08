import { httpService } from './http.service.js'
const ENDPOINT = 'order'

export const orderService = {
    query,
    getById,
    save,
    remove,
    _makeId,
    _saveordersToFile,
    getCategories,
    getqueryStringParams,
    getEmptyOrder,
}

async function query(filterBy) {
       
    return await httpService.get(ENDPOINT, filterBy)

    // var res = await axios.get('../../data/order.json')
    // var orders = res.data[0].orders
    // if (filterBy) orders = setordersFilters(orders, filterBy)
    // return orders
}

async function getById(orderId) {
    return await httpService.get(`${ENDPOINT}/${orderId}`)

    // try {
    //     let orders = await query()
    //     const order = orders.find(order => order._id === orderId)
    //     return Promise.resolve(order)
    // } catch (error) {
    //     console.log('error', error)
    // }
}

async function save(order) {
    var order = JSON.parse(JSON.stringify(order))
    if (order._id) {
        return await httpService.put(`${ENDPOINT}/${order._id}`, order)
    } else {
        if (!order.name) order.name = 'Unknown'
        return await httpService.post(ENDPOINT, order)
    }
}

async function remove(orderId) {
    return await httpService.delete(`${ENDPOINT}/${orderId}`)
    // const idx = cars.findIndex(order => order._id === orderId)
    // gorders.splice(idx, 1)
    // // return Promise.resolve()

    // return _saveordersToFile()
}

function _saveordersToFile() {
    return new Promise((resolve, reject) => {
        const content = JSON.stringify(gorders, null, 2)
        fs.writeFile('./data/order.json', content, err => {
            if (err) {
                console.error(err)
                return reject(err)
            }
            resolve()
        })
    })
}

function _makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function getEmptyOrder() {
    return Promise.resolve({
        createdAt: '',
        timeToDeliver: '',
        seller: {
            _id: '',
            fullname: '',
            imgUrl: '',
        },
        buyer: {
            _id: '',
            fullname: '',
            imgUrl: '',
        },
        gig: {
            _id: '',
            images: '',
            category: '',
            price: null,
            description: '',
        },
        status: 'Pending',
    })
}

function getCategories() {
    return categories
}

function setordersFilters(orders, filter) {
    if (filter.category) {
        orders = orders.filter(order => order.category === filter.category)
    }
    if (filter.tag) {
        orders = orders.filter(order => order.tags.includes(filter.tag))
    }
    return orders
}

function getqueryStringParams(filterBy) {
    const queryStringParams = `explore`
    // const queryStringParams = `explore?category=${filterBy.category}`;
    // const newUrl =
    return window.location.protocol + '//' + window.location.host + window.location.pathname + queryStringParams
    // return newUrl
}
