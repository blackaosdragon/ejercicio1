import React, {Component} from 'react'
import Contador from "./componentes/contador.js"
import './App.css';


class App extends Component{
  constructor()  {
    super();
    this.state = {
      value: '0',
      valueInitial: '0'
    }
  }
  handleChange = event => {
    if(isNaN(event.target.value)){
      
    } else {
      this.setState({
        value: event.target.value
      })
    }
    //console.log(event.target.value)
    
  }
  enterCapture = event => {
    console.log(event.target.value);

    //if(event.keyCode === 13 ){

      this.setState({
        valueInitial: event.target.value        
      })
      console.log(this.state)
    //}
  }
  render(){
    
    return (
      <div className="App">
        <p>Lista 100 elementos</p>
        <input value={this.state.value} onChange={this.handleChange} ></input>
        <Contador onChange={this.handleChange} value={this.state.value} />
      </div>
    );

  }
  
}

export default App;
