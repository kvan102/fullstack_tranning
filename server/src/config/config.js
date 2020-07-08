module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'fullstack',
        user: process.env.DB_USER || 'fullstack',
        password: process.env.DB_PASS || 'fullstack',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './fullstack.sqlite'
        }
    }
}
