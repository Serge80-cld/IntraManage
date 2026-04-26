
const sql = require('mssql');

const config = {
    server: 'localhost\\SQLEXPRESS',
    database: 'IntraManageDB',
    user: 'sa',
    password: 'Password123!',
    options: {
        trustServerCertificate: true
    }
};

module.exports = { sql, config };

