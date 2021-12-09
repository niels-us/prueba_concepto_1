require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    // mongoUri: process.env.MONGOURI || 'mongodb://127.0.0.1:27017',
    mongoUri: process.env.MONGOURI || 'mongodb://mongo',
    dbName: process.env.DBNAME || 'db_agraria'
};

module.exports = { config };