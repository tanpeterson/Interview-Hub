const express = require('express');
const path = require('path');
const { auth, requiresAuth } = require('express-openid-connect');
const expressSession = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

require('dotenv').config()

//importing routers
const postsRouter = require('./routes/posts');
const authRouter = require('./routes/auth');

const app = express();
const cors = require('cors');
const PORT = 3000;

/* Session Config */
const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false
};

if (app.get("env") === "production") {
  // Serve secure cookies, requires HTTPS
  session.cookie.secure = true;
}

/* Passport Config */

const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    /**
     * Access tokens are used to authorize users to an API
     * (resource server)
     * accessToken is the token to call the Auth0 API
     * or a secured third-party API
     * extraParams.id_token has the JSON Web Token
     * profile has all the information from the user
     */
    return done(null, profile);
  }
);
/* App Config */

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.use(expressSession(session));

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
});

// app.use("/", authRouter);

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SESSION_SECRET,
  baseURL: 'http://localhost:3000',
  clientID: 'uFDugT69kXMvgEFTXmtx5SVLRt5qfHGH',
  issuerBaseURL: 'https://dev-6irvrif3.us.auth0.com',
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// app.use("/", authRouter);

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  // console.log(req.oidc.isAuthenticated());
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// Gets user information
app.get('/profile', 
requiresAuth(), 
(req, res) => {
  // console.log(req.oidc.user);
  res.send(JSON.stringify(req.oidc.user));
});

// // endpoint to handle redirecting directly to the sign-up page from the client
// app.get('/sign-up', (req, res) => {
//   res.oidc.login({
//     authorizationParams: {
//       screen_hint: 'signup',
//     },
//   });
// });

//route handlers
app.use('/posts', postsRouter);

//catch all error handler 
app.use((req, res) => res.status(404).send('This page does not exist'));

//error handler 
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));