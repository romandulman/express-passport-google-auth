const router = require('express').Router();

//login
router.get('/login',(req,res)=>{
    res.render('login',{ title: 'Login' })
});

//auth with google
router.get('/google',(req,res)=>{

});

router.get('/logout',(req,res)=>{

});

module.exports = router;
