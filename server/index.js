import express from 'express'
import database from './database/connect.js'
import posts from './controler/posts.js'
import cors from 'cors'

const app = express()


app.use(express.urlencoded({ extended: true }))

app.use(cors)
app.use(posts)

app.get('/test', (req, res) => {
    res.send('test')
})

app.listen(3000)