import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './component/header';

export default class App extends React.Component{

  constructor(){
    super()


    this.defaultEmail = "asaadjawed70@gmail.com";
    this.defaultPass  = "123";

    this.state ={
      email : "",
      pass : "",
    }
  }

 
 handleSetEmail=(event)=>{

  this.setState({

    email:event.target.value,
    pass:this.state.pass,
   
  })
  
 }





 handleSetPassword=(event)=>{

  this.setState({
    pass: event.target.value,
    email:this.state.email,

  })
 }


 handleSubmit=(e)=>{

  e.preventDefault();
   if(this.state.email==this.defaultEmail && this.state.pass==this.defaultPass){
     console.log("You'r Welcome");
   }else{
     console.log("You'r entered wrong Password, Plz try again");
   }
  
 }

  render(){
     return (

    <div>
       
     <form>

    Email: <input value={this.state.email} onChange={this.handleSetEmail} type="email" name="email" placeholder="Enter an email" id="email"/> <br/>

    Password: <input value={this.state.pass} onChange={this.handleSetPassword} type="password" name="password" placeholder="Enter a password" id="password"/>
    
      <button  onClick={this.handleSubmit} type="submit">submit</button>
     </form>
          
      </div>
    );
  }
}

