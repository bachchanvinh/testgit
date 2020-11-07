import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={name:"Vinh"}
  }
  render(){
    return (
      <div>
        Hello {this.state.name}
      </div>
    )
  }
}

export default App;
