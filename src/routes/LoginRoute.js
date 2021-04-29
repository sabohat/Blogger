const router = require('express').Router()

router.get('/', async (req, res) => {
    res.render('login', {
        user: req.user
    })
})

module.exports = {
    path: '/login',
    router
}
