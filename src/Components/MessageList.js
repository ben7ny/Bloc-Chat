import React, { Component } from 'react';


class MessageList extends Component{
  constructor(props){
<<<<<<< HEAD
   super(props);
   this.state = {
     messages: [],
     content: '',
     username: '',
     sentAt: '',
     roomId:''
   };

   this.messageRef = this.props.firebase.database().ref('messages');

=======
    super(props);
    this.state = {
      messages: [{
        username: '',
        content: '',
        sentAt: '',
        roomId: ''
      }],
      activeMessages: [],
      content: ''
    };

    this.messageRef = this.props.firebase.database().ref('messages');
    this.state.messages.sentAt = this.props.firebase.database.ServerValue.TIMESTAMP;
>>>>>>> BlocChat-AddUser
  }


  createNewMessage(e){
    e.preventDefault();
    const content = this.state.content;
    this.messageRef.push({
<<<<<<< HEAD
    name: content
  });
=======
      content: content,
      roomId: this.props.activeRoom.key
    });
    this.setState({ content: ''});
>>>>>>> BlocChat-AddUser
  }


  getMessageChange(e){

<<<<<<< HEAD
// this.setState({ content:  e.target.value });
this.setState({
               username: this.props.user,
               content: e.target.value,
               sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
               roomId: this.props.activeRoom});

  }



=======
    this.setState({ content:  e.target.value });

  }

  updateActiveMessageList(activeRoom) {
    if(!activeRoom) {return};
    this.setState({activeMessages: this.state.messages.filter(message => message.roomId === activeRoom.key)})
  }


  componentWillReceiveProps(nextProps) {
    this.updateActiveMessageList(nextProps.activeRoom);
  }
>>>>>>> BlocChat-AddUser

  componentDidMount() {
    this.messageRef.on('child_added', snapshot => {
      console.log(snapshot);
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });
  }




<<<<<<< HEAD
    render(){
      return(
        <div className="messageParts">
        <h2>Active Room:{this.props.activeRoom.name}</h2>
        <div className="messageList">{this.state.messages.map((message, index)=>
          <ul key={index}>
          <li>{message.content}</li>
          </ul>
        )}

        </div>
        <section className="messageForm">
          <form className="newMessage" onSubmit={(e) => this.creatNewMessage(e)}>
            <label>
              <input type="text" placeholder="Write Your Message" value={this.state.message} onChange={(e)=>this.getMessageChange(e)}/>
            </label>
            <input type="submit" value="Send Message"/>
          </form>
        </section>


        {
=======
  render(){
    return(
      <div className="messageParts">
      <h2>Active Room:{this.props.activeRoom.name}</h2>
      <h3> USER:{this.props.currentUser}</h3>
      <div className="messageList">{this.state.activeMessages.map((message, index)=>
        <ul key={index}>
        <li>{message.content}</li>
        </ul>
      )}

      </div>
      <section className="messageForm">
      <form className="newMessage" onSubmit={(e) => this.createNewMessage(e)}>
      <label>
      <input type="text" placeholder="Write Your Message" value={this.state.content} onChange={(e)=>this.getMessageChange(e)}/>
      </label>
      <input type="submit" value="Send Message"/>
      </form>
      </section>


      {
>>>>>>> BlocChat-AddUser
        // <section className="messageForm">
        //   <form className="newMessage" onSubmit={(e) => this.creatNewMessage(e)}>
        //
        //       <textarea  placeholder="Write Your Message" value={this.state.message} onChange={(e)=>this.getMessageChange(e)}> </textarea>
        //
        //     <input type="submit" value="Send Message"/>
        //   </form>
        // </section>
<<<<<<< HEAD
        }
        </div>
=======
      }
      </div>
>>>>>>> BlocChat-AddUser

    );
  }
}




export default MessageList;
