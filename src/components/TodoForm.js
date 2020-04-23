import React from 'react'

export default class TodoForm extends React.Component {
    constructor() {
        super();

        this.state = ({
            todoName: ""
        })
    }

    handleChanges = event => {
        event.preventDefault();
        this.setState({
            todoName: event.target.value
        })
    }

    handleClick = event => {
        event.preventDefault();
        
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="..Add Todos"
                        name="todo"
                        value={this.state.todoName}
                        onChange={this.handleChanges}
                    /><br/>
                    <button onClick={this.handleClick}>Submit</button>
                </form>
            </div>
        )
    }
}
