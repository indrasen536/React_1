import React,{useState} from "react";
//import Components
import CreateTweet from './components/CreateTweet';
import TweetList from './components/TweetList';
function App() {
  let message = 'Hello';
  let [textInput, setTextInput] = useState("");//state lifting
  const [tweets, setTweets] = useState([]);
  let[name,setName]=useState('Indrasen');
  // const stateEventHandler =(event)=>{
  //   console.log(event);
  //   setName('Alvin David');
  // }
  return (
    <div>
      <h1>Hello React</h1>
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets}/>
      <TweetList setName={setName} name={name} tweets={tweets} setTweets={setTweets}/>
    </div>
  );
}

export default App;
