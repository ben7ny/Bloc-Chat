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
  console.log(newRoomName);
  this.roomsRef.push({
  name: newRoomName
});

}

getNameChange(e) {
  this.setState({ newRoomName: e.target.value });
}



  render() {
    return (
      <div className="myRoomList"> {this.state.rooms.map((room, index)=>
        <ul key={index}>
        <li>{room.name}</li>
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
