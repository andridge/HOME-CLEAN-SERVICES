const auth_ctrl = require("../controllers/auth_ctrl");
module.exports = function(app, passport) {
    app.get('/', auth_ctrl.signup);

 
 
    app.get('/', auth_ctrl.signin);
    app.get('/primaryProfile',isLoggedIn,auth_ctrl.primaryprofile);
    app.get('/work-single',isLoggedIn,auth_ctrl.worksingle);
    app.get('/payWall',isLoggedIn,auth_ctrl.paywall);
    //  app.get('/peoplePage',auth_ctrl.peoplepage);
    app.get('/logout',auth_ctrl.logout);
 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/primaryProfile',
 
            failureRedirect: '/ '
        }
 
    ));
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/primaryProfile',
 
        failureRedirect: '/'
    }
    
 
));

    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
         
            return next();
             
        res.redirect('/');
     
    }
}