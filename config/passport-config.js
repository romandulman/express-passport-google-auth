const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook');
const keys = require('./keys');


passport.use(
    new GoogleStrategy({

        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL:'http://localhost:3000/auth/google/redirect'

    }, (accessToken, refreshToken, profile, done) =>{
       console.log(profile);
    })

);
passport.use(new FacebookStrategy({
        clientID: keys.facebook.clientID,
        clientSecret: keys.facebook.clientSecret,
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    (accessToken, refreshToken, profile, cb) => {
      //  User.findOrCreate({ facebookId: profile.id }, function (err, user) {
       //     return cb(err, user);
      //  });
        console.log(profile);
    }
));