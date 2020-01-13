import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      textInput: "",
      todos: [],
      deleteTodo: true,
      counter: 0
    };
  }
  toggle = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };
  updateArray = () => {
    const textInput = this.state.textInput;
    const todos = this.state.todos;
    let counter = this.state.counter
    console.log(counter)
    const newItem = {
        textInput: textInput,
        id: this.state.counter
    }
    todos.push(newItem);
    counter= counter+1

    this.setState({
      todos: todos, 
      counter: counter  
    })

    console.log(todos);
  };
  type = e => {
    this.setState({ textInput: e.target.value });
  };
  
  render() {
    console.log("textInput", this.state.textInput);
    console.log("todos", this.state.todos);

    return (
      <div>
        <button onClick={this.updateArray}>Submit</button>
        <input type="text" onChange={this.type}></input>
        {this.state.todos.map(
          (item, index) =>{
            console.log(item)
            
          }
        )}
      </div>
    );
  }
}
export default App;
