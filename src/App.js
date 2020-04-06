import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todos = [
  {
    duty: "Feed homework to dog",
    id: 123,
    completed: true
  },
  {
    duty: "Do laundry",
    id: 69,
    completed: false
  },
  {
    duty: "Get paid",
    id: 456,
    completed: false
  },
]

const divStyle = {
  margin: 'auto',
  width: "50%",
  border: '5px solid blue'
};

const nameStyle = {
  margin: '15px',
  border: '5px solid red',
  color: "red",
  textAlign: "center"
};

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
      super();

      this.state = ({
        todoList: todos,
        newTodo: ""
      })
    }

  render() {
    return (
      <div>
        <h1>Hello</h1>

        <TodoList 
        divStyle = {divStyle}
        todoList = {this.state.todoList}
        />
        <TodoForm />
      </div>
    );
  }
}

export default App;
