module.exports = {
  development: {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: '5432',
    database: process.env.DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  }
}

//arquivo de configuração do sequelize no JS
