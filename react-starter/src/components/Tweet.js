import React from "react";

const Tweet = ({ name, message, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    //setTweet();
    console.log(tweet);
    console.log(tweets);
    setTweets(tweets.filter((state) => state.id !== tweet.id));
  };
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{tweet.message}</h3>
      <button>Like</button>
      <button onClick={deleteTweet}>Delete</button>
    </div>
  );
};

export default Tweet;
