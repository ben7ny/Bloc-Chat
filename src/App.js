
import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './Components/RoomList';
import './App.css';



  var config = {
      apiKey: "AIzaSyA32uV2_9Ec8zNw9FFtvWoiQ_7uj9SjpD0",
      authDomain: "my-bloc-chat-4f445.firebaseapp.com",
      databaseURL: "https://my-bloc-chat-4f445.firebaseio.com",
      projectId: "my-bloc-chat-4f445",
      storageBucket: "my-bloc-chat-4f445.appspot.com",
      messagingSenderId: "501108398350"
    };

    firebase.initializeApp(config);



class App extends Component {
  render() {
    return (
      <div className="App">
        <RoomList firebase="{firebase}"/>
      </div>
    );
  }
}

export default App;
