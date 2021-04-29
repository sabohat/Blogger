const router = require('express').Router()

router.get('/', async (req, res) => {
    res.render('home', {
        user: req.user
    })
})

module.exports = {
    path: '/',
    router
}

