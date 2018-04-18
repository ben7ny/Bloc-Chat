import React, { Component } from 'react';


class MessageList extends Component{
  constructor(props){
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
  }


  createNewMessage(e){
    e.preventDefault();
    const content = this.state.content;
    this.messageRef.push({
      content: content,
      roomId: this.props.activeRoom.key,
      username: this.props.currentUser,
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP
    });
    this.setState({ content: ''});
    // this.setState({ content: this.state.messages.concat( content) })
  }


  getMessageChange(e){

    this.setState({ content:  e.target.value });

  }

  updateActiveMessageList(activeRoom) {
    if(!activeRoom) {return};
    this.setState({messages: this.state.messages.filter(message => message.roomId === activeRoom.key)})
  }


  componentWillReceiveProps(nextProps) {
    this.updateActiveMessageList(nextProps.activeRoom);
  }

  componentDidMount() {
    this.messageRef.on('child_added', snapshot => {
      console.log(snapshot);
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });
  }




  render(){
    return(
      <div className="messageParts">


        <h2>Active Room:{this.props.activeRoom.name}</h2>
        <div className="messageList">{this.state.messages.map((message, index)=>
          <ul  key={index}>
          <li><h3>User:{message.username}</h3></li>
          <li>time:{message.sentAt}</li>
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
      </div>

    );
  }
}




export default MessageList;
