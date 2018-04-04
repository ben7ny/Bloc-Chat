import React, { Component } from 'react';


class MessageList extends Component{
  constructor(props){
   super(props);
   this.state = {
     messages: [],
     content: '',
     username: '',
     sentAt: '',
     roomId:''
   };

   this.messageRef = this.props.firebase.database().ref('messages');

  }


  createNewMessage(e){
    e.preventDefault();
    const content = this.state.content;
    this.messageRef.push({
    name: content
  });
  }


  getMessageChange(e){

// this.setState({ content:  e.target.value });
this.setState({
               // username: this.props.user,
               content: e.target.value,
               sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
               roomId: this.props.activeRoom});

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
        // <section className="messageForm">
        //   <form className="newMessage" onSubmit={(e) => this.creatNewMessage(e)}>
        //
        //       <textarea  placeholder="Write Your Message" value={this.state.message} onChange={(e)=>this.getMessageChange(e)}> </textarea>
        //
        //     <input type="submit" value="Send Message"/>
        //   </form>
        // </section>
        }
        </div>

    );
  }
}




export default MessageList;
