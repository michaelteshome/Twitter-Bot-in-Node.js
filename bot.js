let Twit = require('twit')
let config = require('./config');
let T = new Twit(config);

let params = {
    q: '#MAGA',
    count: 2
    
};

function gotData(err, data, response){
    let tweets = data.statuses;
    for(let x = 0; x < tweets.length; x++){
        //console.log(tweets[x].text);
        if(tweets[x].user.name = 'Donald J. Trump'){
            console.log('Trump Tweeted: ' + tweets[x].text );
        }
        //console.log('Trump Tweeted: ' + tweets[x].text );
    }
};

T.get('search/tweets', params, gotData);
/***Posting Tweets functions */
function postData(err, data, response){
    try{
        let postTweets = data.statuses;
        console.log(postTweets.text);
        //console.log(data);
    }
    catch(err){
        console.error('Something went wrong:' + err.message);
    }
    
};

function tweetsIt(){
    let num = Math.round(Math.random() * 100);
    let params2 = {
        status: 'Our Powerball Winner!: ' + num
    };

    T.post('statuses/update', params2, postData);
}

setInterval(tweetsIt, 3600000);
//T.post('statuses/update', params2, postData);


