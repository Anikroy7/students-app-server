//import the mongoclient
const { MongoClient } = require('mongodb');

let _db = null

// create a connect
const connect = async () => {
    const client = new MongoClient('mongodb://127.0.0.1:27017', { useNewUrlParser: true })
    await client.connect();
    _db = client.db('schooldb')
}

//create a getdb
const getdb = () => {
    return _db;
}

module.exports = {
    getdb,
    connect
}

