const express = require('express');
const path = require('path');
const { auth, requiresAuth } = require('express-openid-connect');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

const postsRouter = require('./routes/posts');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'uFDugT69kXMvgEFTXmtx5SVLRt5qfHGH',
  issuerBaseURL: 'https://dev-6irvrif3.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.get('/db/poop', (req, res) => {
  console.log('LOL POOP HAHAH')
});
// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// Gets user information
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

//route handlers
app.use('db/posts', postsRouter);



module.exports = app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));