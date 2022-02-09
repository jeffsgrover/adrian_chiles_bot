const Twitter = require('twitter');
const dotenv = require('dotenv');
dotenv.config();

const config = {
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET_KEY,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

const T = new Twitter(config);
let status = "MY FIRST TWEET\nThis is my first tweet! Hello world!"

T.post('statuses/update', {status: status},  function(err) {
    if(err) {
      console.log(err)
        throw err;
    }
});