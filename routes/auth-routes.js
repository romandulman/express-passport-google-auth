const router = require('express').Router();
const passport = require('passport');

//login
router.get('/login', (req, res) => {
    res.render('login', {title: 'Login'})
});


router.get('/google',
    passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/plus.login']

    }));


router.get('/google/redirect',
    passport.authenticate('google', {failureRedirect: '/login'}),
    function (req, res) {
        res.redirect('/');
    });


router.get('/logout', (req, res) => {

});

module.exports = router;
