
import React, { Component } from 'react';



class RoomList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      newRoomName: ''
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  }



  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
    });
  }


createRoom(e){
  e.preventDefault();
  const newRoomName = this.state.newRoomName;
  this.roomsRef.push({
  name: newRoomName
});
}

deleteRoom(index){
  const deltRoom = this.state.rooms.filter( (room, i) => i !== index );
  // this.roomsRef.remove();
  this.setState({ rooms: deltRoom });
}

getNameChange(e) {
  this.setState({ newRoomName: e.target.value });
}



  render() {
    return (
      <div className="myRoomList"> {this.state.rooms.map((room, index)=>
        <ul key={index}>
        <li onClick={ (e) => this.props.selectRoom(room)}><h1>{room.name}</h1></li>
        <li><button onClick={()=>this.deleteRoom(index)}>Remove Room</button></li>
        </ul>
      )}
      <div>
          <form className="NewRoomCreated" onSubmit={ (e) =>this.createRoom(e)}>
            <label> Enter New Room Name:
            <input type="text" placeholder="Type New Room Name" value={this.state.newRoomName} onChange={ (e) => this.getNameChange(e) }/>
            </label>
            <input type="submit" value="Create Room" />
        </form>
       </div>
      </div>
    );
  }
}











export default RoomList;
