const tour = require('../models/tour.js');
const placeModel = tour.placeModel();
const tourModel = tour.tourModel();

/**
 * CREAT DEFAULT PLACES
 */
const p1 = placeModel({
    name: "The Zollern Colliery",
    lat: 51.518864,
    lng: 7.333496,
    type: ["museum", "industry"],
    placeImageURL: "https://www.planetware.com/photos-large/D/germany-dortmund-zollern-colliery.jpg",
    description: "One of eight former industrial sites now included under the umbrella of the Westphalian Industrial Museum, the Zollern Colliery is a disused coal mine famous for its stunning architecture, particularly the redbrick façades of its main buildings. The best of these is the Machine Hall, built in 1904, with one of the most stunning Art Nouveau entrances in Germany."
});
const p2 = placeModel({
    name: "Museum Ostwall",
    lat: 51.515186,
    lng: 7.453430,
    type: "museum",
    placeImageURL: "/public/img/dortmunder-u_pascal-amos-rest_web_content_mobile.jpg",
    description: "In addition to its industrial past, Dortmund also has a number of important attractions focusing on its rich cultural heritage. Perhaps the most important - certainly the most conspicuous - is Dortmund U, a huge former factory now transformed into a hub of artistic and creative activity. Highlights include the work of local and regional artists, along with filmmakers and photographers. The building is also home to Museum am Ostwall, a fine collection of 20th-century paintings, objets d'art, sculptures, and graphic art, as well as works by the Expressionist group, Die Brücke."
});
const p3 = placeModel({
    name: "Dortmund Port",
    lat: 51.527326,
    lng:  7.447878,
    type: "museum",
    placeImageURL: "/public/img/germany-dortmund-port-authority.jpg",
    description: "Dortmund, on the River Emscher and close to the River Ruhr, has long relied upon its waterways to transport the goods produced by its numerous industries. Dortmund also marks the beginning of the Dortmund-Ems Canal, a 269-kilometer-long route to the sea that was opened in 1899 to help deal with the region's ever increasing production capabilities."
});
const p4 = placeModel({
    name: "Botanic Garden Rombergpark",
    lat: 51.515318,
    lng: 7.468501,
    type: ["park", "garden"],
    placeImageURL: "https://media-cdn.tripadvisor.com/media/photo-s/0a/3e/8b/c8/botanischer-garten-rombergpark.jpg",
    description: "The Botanischer Garten Rombergpark, or informally Rombergpark, is an extensive municipal arboretum and botanical garden located at Am Rombergpark 49b, Dortmund, North Rhine-Westphalia, Germany. With its total area of 65 hectares the Rombergpark is one of the largest botanical gardens in the world. It is open daily."
});
const p5 = placeModel({
    name: "Wasserschloss Haus Rodenberg",
    lat: 51.498197,
    lng: 7.554465,
    type: "museum",
    placeImageURL: "/public/img/germany-dortmund-haus-rodenberg.jpg",
    description: "An outstanding example of Renaissance architecture, Wasserschloss Haus Rodenberg is surrounded on three sides by a moat and overlooks a lake in the center of a park. The first records of it are from 1290, and it is known to have been reconstructed after 1422. In the late 1600s, it was converted into the Baroque water castle you see today. The lake and parklands are popular in the summer, and the castle houses the Märchenbühne, a puppet theater with shows for children and adults. It is near the Aplerbeck U-bahn station."
});
const p6 = placeModel({
    name: "The children's museum mondo mio",
    lat: 51.497065,
    lng: 7.472346,
    type: ["museum", "children"],
    placeImageURL: "https://www.ruhrnachrichten.de/bilder/dieser-grosse-fahrradwagen-steht-im-eingang-zur-ausstellung-1432856.jpg",
    description: "Here you and your children get to know the cultural diversity of the earth. In this way the different cultures are explained in a playful and interactive way and brought closer to you, including your own culture. In the exhibition \"Nijambo-Energie\" you will be shown how much you actually have to do with other countries in everyday life. But you can also often see exciting temporary exhibitions, there is always something new to discover."
});
const p7 = placeModel({
    name: "Westfalenpark",
    lat: 51.495054,
    lng: 7.477098,
    type: "park",
    placeImageURL: "https://www.dortmund.de/media/bilder/kopfpanoramen/kopfpanoramengro/westfalenpark_1/westfalenpark_luftansicht.jpg",
    description: "Centrally location and yet away from the hustle and bustle of the city, the Westfalenpark is situated between the city centre, the stadium of the BVB and the southern Dortmund with Lake Phoenix & Co. Here you spend a whole day in the countryside and get a real feeling of a short holiday, recreation and travel to the past. Since its foundation at the end of the 1950s, the park has been the classic destination for Sunday walks: Here people once strolled diligently, rode the train, spread out blankets and unpacked picnic baskets! In the shade of the Florian Tower, you can still sit comfortably on the ceiling and relax, or listen to the sounds of DJs and bands when one of the big festivals in the park take place - like the Juicy Beats, for example."
});
const p8 = placeModel({
    name: "German Football Museum",
    lat: 51.498197,
    lng: 7.554465,
    type: ["football", "museum"],
    placeImageURL: "https://glamox.com/upload/2017/04/21/160610-dfb-dortmund-49-2.jpg",
    description: "Soccer fans can get their fill of the game at this new museum, although it is designed for a broader audience as well, with exhibits that look at the sport's economic, cultural, and social significance in addition to its entertainment value. You'll learn about fan culture, football as a role model, and its relationship with nutrition. How historic events have influenced the sport is explored through exhibits on football under National Socialism in the 1930s and 40s, as well as under the Communist regime in the GDR."
});
const p9 = placeModel({
    name: "Glowing Rooms Dortmund",
    lat: 51.513171,
    lng: 7.474662,
    type: ["museum", "children"],
    placeImageURL: "http://www.eugen-schramm.de/wp-content/uploads/2015/02/Glowing-Rooms-Dortmund-Eugen-Schramm-001a.jpg",
    description: "The fascinating leisure-time fun for Dortmund Indoor minigolf is the perfect leisure-time activity – whatever your age, whatever the weather. The Glowing Rooms offer an extraordinary setting thanks to black light and 3-D effects through the ChromaDepth glasses. The walls and floors of each room have been decorated by well-known artists. Color and light allow the imagination to take flight. Pandora, Dwarrowdelf and Universe are adorned with bright and colorful figures and shapes. Your surroundings come to life and take you on a fantastic journey."
});
const p10 = placeModel({
    name: "Automobile Museum",
    lat: 51.458599,
    lng:  7.484533,
    type: ["museum", "children"],
    placeImageURL: "https://echt-nrw.de/wp-content/uploads/2019/01/automuseum_dortmund_autogalerie3.jpg",
    description: "If you like vintage vehicles, don't miss the excellent collection of old trams at Dortmund's Local Transport Museum, housed in Mooskamp Station. The oldest of the trams included in these fascinating displays of the city's century-old transit system date back to the early 1900s. From Dortmund, these old trams headed deep into the Rhur Valley, carrying workers to the region's mines, coke plants, and steelworks. Also of interest is the Motor Car Museum, home to a collection of fine vintage vehicles, including Jaguars and Ferraris, plus displays relating to the development of Germany's auto industry."
});
const p11 = placeModel({
    name: "Signal Iduna Park",
    lat: 51.492813,
    lng:  7.451847,
    type: "football",
    placeImageURL: "http://www.desktopimages.org/pictures/2014/0519/1/orig_62452.jpg",
    description: "Westfalenstadion is a football stadium in Dortmund, North Rhine-Westphalia, Germany, which is the home of Borussia Dortmund. Officially called Signal Iduna Park for sponsorship reasons, the name derives from the former Prussian province of Westphalia. The stadium is one of the most famous football stadiums in Europe and is renowned for its atmosphere."
});
const p12 = placeModel({
    name: "Phoenix Lake",
    lat: 51.491144,
    lng: 7.513512,
    type: "lake",
    placeImageURL: "https://www.bjoernsen.de/typo3temp/_processed_/csm_11_2014_06_Luftbild_Phoenixsee_Neubauer_157ba166e3.jpg",
    description: "If you like to spend relaxing hours at the water, you are exactly right at PHOENIX Lake in Dortmund. The lake in Dortmund's Hörde district offers you not only relaxation on an area of 1.2 kilometres long and 320 metres wide, but also a lush culinary landscape. In the harbour area of PHOENIX Lake, not only sailors and water sports enthusiasts get their money's worth: Here numerous cafés and restaurants await you, which not only pamper you with a great lake view, but also provide for an enjoyable stopover. The artificial lake in Dortmund is also a perfect destination for a long walk. Don't miss the ascent to the Kaiserberg, an artificial heap in the east of the lake. From here you have a fantastic view of the water and the city, especially at the blue hour and at sunset."
});

/**
 * CREAT DEFAULT TOURS
  */
const t1 = tourModel({
    name: "Museums Tour",
    places: [p2, p1, p5],
    rate: 4,
    review: "A very modern museum, with a lot of interactive screens and more which makes you feel like you are living the atmosphere. I love that it was a side deidcated to female football which is amazing as well as a team."
});
const t2 = tourModel({
    name: "Rad Tour",
    places: [p3, p4, p12],
    rate: 4.5,
    review: "Intermediate bike ride. Good fitness required. We had to do an emergency re-route around drunk football fans, and everything was done well. We learned a lot about the city and had a lot of fun. Prices were also very reasonable."
});
const t3 = tourModel({
    name: "Kid Tour",
    places: [p10, p9, p6],
    rate: 5,
    review: "We had a great time at the Glowing Rooms - Didn't really know what to expect before we got there. The staff were great and friendly. A unique experience and would recommend if you have older children/teenagers and definitely for adults. "
});
const t4 = tourModel({
    name: "Football Tour",
    places: [p11, p8, p7],
    rate: 4,
    review: "The stadium and the whole surroundings are best visited on the day of the BVB match. Something wonderful. The works are amazing. The tribune has a lot of bars and points with souvenirs. The stadium is very efficient despite the crowd. The atmosphere is always great."
});

module.exports = function (app, passport) {
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
        // const tourName = req.params.tourName.charAt(0).toUpperCase() +
        //     req.params.tourName.slice(1).toLowerCase();
        const tourName = req.params.tourName;
        tourModel.findOne({name: {$regex: tourName, $options: "i"}}, (err, foundTour) => {
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
                type: place.type, placeImageURL: place.image, description: place.description
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
        const keyword = '.*' + req.body.keyword + '.*';
        tourModel.find({ $or: [{name: {$regex: keyword, $options: "$i"}}, {type: {$regex: keyword, $options: "$i"}},
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
