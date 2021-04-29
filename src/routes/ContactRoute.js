const router = require('express').Router()

router.get('/', async (req, res) => {
    res.render('contact', {
        user: req.user
    })
})

module.exports = {
    path: '/contact',
    router
}

