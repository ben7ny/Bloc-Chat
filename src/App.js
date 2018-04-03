
import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './Components/RoomList';
import MessageList from './Components/MessageList'
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
  constructor(props){
  super(props);
  this.state = {
    ActiveRoom:''
  };
}

selectRoom(room){
  console.log(room.key);
   this.setState({ActiveRoom: room.key});
}




  render() {
    return (
      <div className="App">
        <h1>Bloc Chat</h1>
        <table>
          <tbody>
            <tr>
              <td><RoomList firebase={firebase} selectRoom={this.selectRoom.bind(this)}/></td>
              <td><MessageList firebase={firebase} ActiveRoom={this.state.ActiveRoom}/></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
