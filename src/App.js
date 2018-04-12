
import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './Components/RoomList';
import MessageList from './Components/MessageList';
import User from './Components/User';
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
    activeRoom:'',
    user: 'Guest'
  };
}

selectRoom(room){
  console.log(room);
   this.setState({activeRoom: room});
}



setUser(user) {
    this.setState ({user: user});
}




  render() {
    const showMessages = this.state.activeRoom !== '' ? 'shown' : 'hidden';
    const currentUser = this.state.user === null ? 'Guest' : this.state.user.displayName;
    return (
      <div className="App">
        <h1 className='app-name'>Bloc Chat</h1>
        <table>
          <tbody>
            <tr>
              <td><RoomList firebase={firebase} selectRoom={this.selectRoom.bind(this)}/></td>
              <td className={showMessages}>
                <MessageList firebase={firebase} activeRoom={this.state.activeRoom}/>)
              </td>
              <td><User firebase={firebase} setUser={this.setUser.bind(this)} currentUser={currentUser}/> </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
