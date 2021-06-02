import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //for unique id's

const CreateTweet = ({ tweets, setTweets, textInput, setTextInput }) => {
  const textEventHander = (event) => {
    console.log(event.target.value);
    setTextInput(event.target.value);
  };
  const submitTextHandler = (event) => {
    event.preventDefault();
    setTweets([...tweets, { message: textInput, id: uuidv4() }]); //creating state(tweet) with an id
    setTextInput("");
    console.log("hey");
  };
  return (
    <form onSubmit={submitTextHandler}>
      <textarea
        cols="50"
        rows="5"
        value={textInput}
        onChange={textEventHander}
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
