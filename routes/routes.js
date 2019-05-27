const tour = require('../models/tour.js');
const placeModel = tour.placeModel();
const tourModel = tour.tourModel();

const sampleReview = "Some quick example text to build on the card title and make up the bulk of the card's content. Museum";

// create default places
const p1 = placeModel({
    name: "place_1",
    lat: 1.0,
    lng: -22.0,
    type: "square",
    placeImageURL: "/public/img/germany-dortmund-haus-rodenberg.jpg"
});
const p2 = placeModel({
    name: "place_2",
    lat: 18.3,
    lng: 25.3,
    type: "pub",
    placeImageURL: "/public/img/dortmunder-u_pascal-amos-rest_web_content_mobile.jpg"
});
const p3 = placeModel({
    name: "place_3",
    lat: -13.2,
    lng: -12.2,
    type: "museum",
    placeImageURL: "/public/img/germany-dortmund-port-authority.jpg"
});
const p4 = placeModel({
    name: "place_4",
    lat: 20.44,
    lng: -92.2,
    type: "station",
    placeImageURL: "/public/img/germany-dortmund-st-reinolds-church-2.jpg"
});

// create default tours
const t1 = tourModel({
    name: "Museumstour",
    places: [p1, p2],
    rate: 4.5,
    review: sampleReview,
    tourImageURL: "/public/img/germany-dortmund-alter-markt-altes-stadthaus.jpg"
});
const t2 = tourModel({
    name: "Radtour",
    places: [p3, p4],
    rate: 5,
    review: sampleReview,
    tourImageURL: "/public/img/germany-dortmund-westfalenpark.jpg"
});
const t3 = tourModel({
    name: "Shoppingtour",
    places: [p1, p4],
    rate: 5,
    review: sampleReview,
    tourImageURL: "/public/img/istockphoto-500571126-612x612.jpg"
});
const t4 = tourModel({
    name: "Footballtour",
    places: [p2, p4],
    rate: 5,
    review: sampleReview,
    tourImageURL: "/public/img/150303_dfm_kampagnen_d077a3.jpg__1024x0_q90_crop_subsampling-2.jpg"
});

module.exports = function (app, passport) {
//normal routes
    app.get('/', async (req, res) => {
        try {
            tourModel.find({}, (err, foundTours) => {
                // save tours to "Tour" (empty) inside the DB
                if (foundTours.length === 0) {
                    tourModel.insertMany([t1, t2, t3, t4], (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Successfully added defaultTours to DB");
                        }
                    });
                }
                res.render('home', {
                    suggestedTours: [t1, t2, t3, t4],
                    tours: foundTours,
                    user: req.user,
                    isLoggedIn: req.isAuthenticated()
                });
            });
        } catch (err) {
            res.status(error.response.status);
            return res.send(error.message);
        }
    });

    app.get('/about', (req, res) => {
        res.render('about', {
            user: req.user, isLoggedIn: req.isAuthenticated()
        });
    });

    // ========== LOGOUT ==========
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/mytours', (req, res) => {
        tourModel.find({}, (err, foundTours) => {
            if (err) {
                console.log(err);
            } else {
                res.render('myTours', {
                    tours: foundTours, user: req.user, isLoggedIn: req.isAuthenticated()
                });
            }
        });
    });

    // page Infos about ONE tour
    app.get('/mytours/:tourName', (req, res) => {
        const tourName = req.params.tourName.charAt(0).toUpperCase() +
            req.params.tourName.slice(1).toLowerCase();

        tourModel.findOne({name: tourName}, (err, foundTour) => {
            if (err) {
                console.log(err);
            } else {
                res.render('tourInfos', {tour: foundTour, user: req.user, isLoggedIn: req.isAuthenticated()});
            }
        });
    });

    app.get('/createnewtour', (req, res) => {
        res.render('createNewTour', {
            user: req.user, isLoggedIn: req.isAuthenticated()
        });
    });

    app.post('/createnewtour', (req, res) => {
        const tourName = req.body.name.charAt(0).toUpperCase() +
            req.body.name.slice(1).toLowerCase();
        const tourImage = req.body.imageURL;
        const tourReview = req.body.review;

        let tourPlaces = [];
        const addedPlaces = req.body.places;
        addedPlaces.forEach((place) => {
            const placeToModel = placeModel({
                name: place.name, lat: place.lat, lng: place.lng,
                type: place.type, placeImageURL: place.image
            });
            tourPlaces.push(placeToModel);
        });

        const newTour = tourModel({
            name: tourName,
            places: tourPlaces,
            rate: "2.5",
            review: tourReview,
            tourImageURL: tourImage
        });
        newTour.save();
    });

    app.post('/search', async (req, res) => {
        const keyword = req.body.keyword;
        tourModel.find({ $or: [{name: {$regex: keyword, $options: "$i"}},
                               {review: {$regex: keyword, $options: "$i"}}]},
            (err, results) => {
                res.render('foundPage', {tours: results, isLoggedIn: req.isAuthenticated()});
        });
    });

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
    // LOGIN ===============================
    // show the login form
    app.get('/loginPart', function (req, res) {
        // res.render('home', { message: req.flash('loginMessage') });
        res.redirect("/#loginPart");
    });

    // process the login form
    app.post('/loginPart', passport.authenticate('local-login', {
        successRedirect: '/', // redirect to the secure profile section
        failureRedirect: '/#loginPart', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // SIGNUP =================================
    // show the signup form
    app.get('/registerPart', function (req, res) {
        // res.render('home', { message: req.flash('signupMessage') });
        res.redirect("/#registerPart");
    });

    // process the signup form
    app.post('/registerPart', passport.authenticate('local-signup', {
        successRedirect: '/', // redirect to the secure profile section
        failureRedirect: '/#registerPart', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    /*
// facebook -------------------------------

    // send to facebook to do the authentication
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['public_profile', 'email'] }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));

// twitter --------------------------------

    // send to twitter to do the authentication
    app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));

    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));


// google ---------------------------------

    // send to google to do the authentication
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));
*/

    /*

// =============================================================================
// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =============================================================================

// locally --------------------------------
    app.get('/connect/local', function(req, res) {
        res.render('connect-local.ejs', { message: req.flash('loginMessage') });
    });
    app.post('/connect/local', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

// facebook -------------------------------

    // send to facebook to do the authentication
    app.get('/connect/facebook', passport.authorize('facebook', { scope : ['public_profile', 'email'] }));

    // handle the callback after facebook has authorized the user
    app.get('/connect/facebook/callback',
        passport.authorize('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));

// twitter --------------------------------

    // send to twitter to do the authentication
    app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));

    // handle the callback after twitter has authorized the user
    app.get('/connect/twitter/callback',
        passport.authorize('twitter', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));

// google ---------------------------------

    // send to google to do the authentication
    app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

    // the callback after google has authorized the user
    app.get('/connect/google/callback',
        passport.authorize('google', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

// local -----------------------------------
app.get('/unlink/local', isLoggedIn, function(req, res) {
    var user            = req.user;
    user.local.email    = undefined;
    user.local.password = undefined;
    user.save(function(err) {
        res.redirect('/profile');
    });
});

// facebook -------------------------------
app.get('/unlink/facebook', isLoggedIn, function(req, res) {
    var user            = req.user;
    user.facebook.token = undefined;
    user.save(function(err) {
        res.redirect('/profile');
    });
});

// twitter --------------------------------
app.get('/unlink/twitter', isLoggedIn, function(req, res) {
    var user           = req.user;
    user.twitter.token = undefined;
    user.save(function(err) {
        res.redirect('/profile');
    });
});

// google ---------------------------------
app.get('/unlink/google', isLoggedIn, function(req, res) {
    var user          = req.user;
    user.google.token = undefined;
    user.save(function(err) {
        res.redirect('/profile');
    });
});
};
*/

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
    //req.isAuthenticated() will return true if user is logged in
        return next();
    res.redirect('/');
}
