module.exports = {
    db: {
        database: process.env.DB_NAME || 'nvWebsiteDb',
        user: process.env.DB_USER || 'root',
        password: process.env.BD_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            storage: './nvwebsite-db.sqlite'
        }
    }
}