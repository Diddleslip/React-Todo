import React from 'react'

export default class TodoForm extends React.Component {
    constructor() {
        super();

        this.state = ({
            phrase: "hello!"
        })
    }
    render() {
        return (
            <div>
                <form>
                    <input
                        type="textbox"
                        placeholder="..Add Todos"
                    /><br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
