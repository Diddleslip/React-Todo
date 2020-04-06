// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

class TodoList extends React.Component {
    constructor() {
        super();

        this.state = ({
            nothing: "nothing"
        })
    }

    // lineThrough =e => {
    //     e.target
    // }

    render() {
        return (
            <div>
            {this.props.todoList.map(X => {
              return(
                <div style={this.props.divStyle}>
                  <h1>{X.duty}</h1>
                  <h2>{X.id}</h2>
                  <h3>{X.completed}</h3>
                </div>
              )
            })}
          </div>
        )
    }
}

export default TodoList
