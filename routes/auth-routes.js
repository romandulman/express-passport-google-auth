const router = require('express').Router();
const passport = require('passport');

//login
router.get('/login',(req,res)=>{
    res.render('login',{ title: 'Login' })
});

//auth with google
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
   res.send('Logged in with Google')
});

router.get('/logout',(req,res)=>{

});

module.exports = router;
