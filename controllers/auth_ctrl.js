var exports = module.exports = {}
 
exports.signup = function(req, res) {

    res.render('mainPage');
   
 
}
exports.signin = function(req, res) {
 
    res.render('mainPage');
}
exports.primaryprofile = function(req, res) {
    
    res.render('primaryProfile', {userFirstName: req.user.userFirstName,
        userLastName: req.user.userLastName,
        userService: req.user.userService,
        userPhone:req.user.userPhone,
        userAddress:req.user.userAddress,
        userEmail:req.user.userEmail,
        password:req.user.password
});
}
exports.worksingle = function(req, res) {
    
    res.render('work-single', {userFirstName: req.user.userFirstName,
        userLastName: req.user.userLastName,
        userService: req.user.userService,
        userPhone:req.user.userPhone,
        userAddress:req.user.userAddress,
        userEmail:req.user.userEmail,
        password:req.user.password
});
}
exports.paywall = function(req, res) {
    
    res.render('payWall', {userFirstName: req.user.userFirstName,
        userLastName: req.user.userLastName,
        userService: req.user.userService,
        userPhone:req.user.userPhone,
        userAddress:req.user.userAddress,
        userEmail:req.user.userEmail,
        password:req.user.password
});
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}