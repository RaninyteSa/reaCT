import express from 'express'
import db from '../database/connect.js'

const router = express.Router()

router.get('/', async (req, res) => {
    const posts = await db.Posts.findAll()
    res.json(posts)
})

router.get ('/:id', async (req, res) => {
    const post = await db.Posts.findByPk(req.params.id)
    res.json(post)
})

router.post('/', async (req,res)=> {
    new db.Posts(req.body).save()
    res.json({ message: 'irasas sekmingai sukurtas'})
})

router.put('/edit/:id', async (req,res) => {
    const post = await db.Posts.findByPk(req.params.id)
    post.update(req.body)
    res.json({ message: 'irasas sekmingai atnaujintas'})
})

router.delete('/delete/:id', async (req,res) => {
    const post = await db.Posts.findByPk(req.params.id)
    post.destroy()
    res.json({ message: 'irasas sekmingai istrintas '})
})

export default router