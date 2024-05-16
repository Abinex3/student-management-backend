const dbConfig = {
    host : '127.0.0.1',
    port : '27017',
    protocol : 'mongodb',
    db : 'student-management'
};

const db = dbConfig.protocol + '://' + dbConfig.host + ':' + dbConfig.port + '/' + dbConfig.db;

module.exports = db;