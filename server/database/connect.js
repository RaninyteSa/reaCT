import sequelize from "sequelize";
import { Sequelize } from "sequelize";
import mysql from 'mysql2/promise';
import Posts from '../model/posts.js'
//import { createConnection } from "mysql2";
// import Name from '../model/name.js'
// import 2Name from '../model/2name.js'

const database = {}


const credentials = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'newdatabase'
}

try {
    const connection =await mysql.createConnection({
        host: credentials.host,
        user: credentials.user,
        password: credentials.password
    })

    await connection.query('CREATE DATABASE IF NOT EXISTS ' + credentials.database)

    const sequelize = new Sequelize(credentials.database, credentials.user, credentials.password, { dialect: 'mysql'})

    database.Posts = Posts(sequelize)
    // database.Name = Name(sequelize)
    // database.2Name = 2Name(sequelize)

    await sequelize.sync({ alter: 'false' })//alter true/false duomenu keitimui
} catch {
    console.log('klaida')
}

export default database