var bCrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy;
module.exports = function(passport, user) {
//const { generateKeyPair } = require('crypto');
//const { Buffer } = require('buffer');   
    var User = user;

    //
    //
    var LocalStrategy = require('passport-local').Strategy;
    passport.use('local-signup', new LocalStrategy(
        {
 
            usernameField: 'email',
 
            passwordField: 'password',
 
            passReqToCallback: true // allows us to pass back the entire request to the callback
 
        },
        function(req, email, password, done) {
 
            var generateHash = function(password) {
 
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
 
            };
            User.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {
 
                if (user)
 
                {
 
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
 
                } else
 
                {
                    //
                    //
                    //
                /*   // Generate RSA keys
                   var publicKey2;
                   var privateKey2;
                    generateKeyPair('rsa', {
                        modulusLength: 512,
                        publicKeyEncoding: {
                        type: 'spki',
                        format: 'pem'
                        },
                        privateKeyEncoding: {
                        type: 'pkcs8',
                        format: 'pem'
                        }
                    }, (err, publicKey, privateKey) => {
                        // Set global variables
                        const publicKeyBase64 = Buffer.from(publicKey).toString('base64');
                        const privateKeyBase64 = Buffer.from(privateKey).toString('base64');
                       // global.publicKey = publicKeyBase64;
                        //global.privateKey = privateKeyBase64;
                        publicKey2=publicKeyBase64;
                        privateKey2=privateKeyBase64;
                        //console.log(publicKey2); // Outputs the public key in PEM format
                        //console.log(privateKey2); // Outputs the private key in PEM format
                    */
                       var userPassword = generateHash(password);
                       var data =
                           {
                               email: email,
                               password: userPassword,
                               userFirstName: req.body.userFirstName,
                               userLastName: req.body.userLastName,
                               userPhone: req.body.userPhone,
                               userAddress: req.body.userAddress
                           };
                       User.create(data).then(function(newUser, created) {
                           if (!newUser) {
                               return done(null, false);
                           }
                           if (newUser) {
                               return done(null, newUser);
                           }
                       });
                }
 
            });
 
        }
 
    ));
    //LOCAL SIGNIN
passport.use('local-signin', new LocalStrategy(
    {
        // by default, local strategy uses username and password, we will override with email
 
        usernameField: 'email',
 
        passwordField: 'password',
 
        passReqToCallback: true // allows us to pass back the entire request to the callback
 
    },
 
 
    function(req, email, password, done) {
 
        var User = user;
 
        var isValidPassword = function(userpass, password) {
 
            return bCrypt.compareSync(password, userpass);
 
        }
 
       User.findOne({
            where: {
                email: email
            }
        }).then(function(user) {
 
            if (!user) {
 
                return done(null, false, {
                    message: 'Email does not exist'
                });
 
            }
 
            if (!isValidPassword(user.password, password)) {
 
                return done(null, false, {
                    message: 'Incorrect password.'
                });
 
            }
 
 
            var userinfo = user.get();
            
            return done(null, userinfo);
            
 
        }).catch(function(err) {
 
            console.log("Error:", err);
 
            return done(null, false, {
                message: 'Something went wrong with your Signin'
            });
 
        });
 
 
    }
 
));
    //serialize
passport.serializeUser(function(user, done) {
 
    done(null, user.id);
 
});
// deserialize user 
passport.deserializeUser(function(id, done) {
 
    User.findOne({
        where: {
           id:id
        }
    }).then(function(user) {
 
        if (user) {
 
            done(null, user.get());
 
        } else {
 
            done(user.errors, null);
 
        }
 
    });
 
});

}