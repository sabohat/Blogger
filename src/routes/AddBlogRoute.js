const router = require('express').Router()

router.get('/', async (req, res) => {
    res.render('post')
})

module.exports = {
    path: '/post',
    router
}