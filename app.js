const fs = require('fs'),
      Twitter = require('twitter'),
      dotenv = require('dotenv'),
      express = require('express'),
      filename = 'tweets.txt';

dotenv.config();
const config = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET
};

var app = express();
  var jsonParser       = bodyParser.json({limit:1024*1024*20, type:'application/json'});
  var urlencodedParser = bodyParser.urlencoded({ extended:true,limit:1024*1024*20,type:'application/x-www-form-urlencoded' })

  app.use(jsonParser);
  app.use(urlencodedParser);


const T = new Twitter(config);

//Read in the file from above, and act on the data once it's been loaded
fs.readFile(filename, 'utf8', function(err, data){
  if (err) throw err;
    let tweets = data.split('\n');

    //Fetch an random and even-numbered index, since our tweets take up two lines
    const i = Math.floor(Math.random() * Math.floor(tweets.length/2))*2;

    //Construct status using two lines
    const status = tweets[i];

    T.post('statuses/update', {status: status},  function(error, tweet) {
      if(error) {
          console.log(error);
          throw error;
      }
    });
});