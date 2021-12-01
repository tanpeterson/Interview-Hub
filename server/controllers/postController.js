const db = require('../models/PostModel');

 const postController = {};

 // get Messages for Home View
 postController.getHomePosts = (req, res, next) => {
  const queryText = 'SELECT * FROM post ORDER BY post_id DESC';

  db.query(queryText)
    .then( result => {
      res.locals.posts = result.rows;
      return next();
    })
    .catch( err => {
      console.log(err);
      return next(err);
    });
};

// get request for profile view that grabs posts posted by the currently logged in user 
postController.getProfilePosts = (req, res, next) => {

  const queryText = `SELECT * FROM post WHERE user_id = $1 ORDER BY post_id DESC`
  const values = [req.body.user_id]

  db.query(queryText, values)
    .then( result => {
      res.locals.posts = result.rows;
      // console.log(res.locals.posts);
      return next();
    })
    .catch( err => {
      console.log(err);
      return next(err);
    });
}


postController.postPost = (req, res, next) => {
 
  const queryText = `INSERT INTO post VALUES (DEFAULT, $1, $2, $3, $4, DEFAULT, $5, $6, $7, $8)`;
  const values = [req.body.title, req.body.author, req.body.user_id, req.body.offer, req.body.algorithms, req.body.application, req.body.details, req.body.visibility];
    
  db.query(queryText, values)
    .then( () =>{
        return next();
    })
    .catch(err => {
        console.log(err);
        return next(err);
    });
};

//req.body should send post_id
postController.deletePost = (req, res, next) => {
  
  const queryText = 'DELETE FROM post WHERE post_id=' + req.body.post_id + ';';
  db.query(queryText, (err, result) => {
    if (err) return next(err);
    console.log(result);
    return next();
  });
};



module.exports = postController;
 