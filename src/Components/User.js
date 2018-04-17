import React, { Component } from 'react';



class User extends Component {
<<<<<<< HEAD
render(){
   return(
     <h1> user go here </h1>
=======


  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
    this.props.setUser(user);
});

  }





  signIn(e) {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
 }


signOut(e) {
  console.log("goodbye");
  this.props.firebase.auth().signOut();
  this.props.setUser('Guest');
 }




render(){
   return(
     <div className='userPart'>
        <h1>Hello, {this.props.currentUser}. Welcome to Bloc-Chat!</h1>
        <button className='LogIn' onClick={this.signIn.bind(this)}>Login With Google</button>
        <button className='logOut' onClick={this.signOut.bind(this)}>Log out</button>
     </div>
>>>>>>> BlocChat-AddUser

  );
 }
}




export default User;
