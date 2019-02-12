//This file holds any configuration variables we may need 
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: 'mongodb://yiflin:5598shirken@ds127851.mlab.com:27851/bootcamp', //place the URI of your mongo database here.
  }, 
  port: process.env.PORT ||8080
};