const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('./keys');


passport.use(
    new GoogleStrategy({

        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL:'http://localhost:3000/auth/google/redirect'

    }, (accessToken, refreshToken, profile, done) =>{
       console.log(profile);
    })

)