import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, message, setName, tweets, setTweets }) => {
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet
          name={name}
          tweet={tweet}
          tweets={tweets}
          setTweets={setTweets}
          key={tweet.id}
        />
      ))}
      {/* <Tweet name={name} tweets={tweets} /> */}
      {/* <button onClick={() => setName("Dev Ed")}>Change Name</button> */}
    </div>
  );
};

export default TweetList;
