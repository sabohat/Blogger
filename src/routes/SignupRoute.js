const router = require('express').Router()

router.get('/', async (req, res) => {
    res.render('signup', {
        user: req.user
    })
})

module.exports = {
    path: '/signup',
    router
}
