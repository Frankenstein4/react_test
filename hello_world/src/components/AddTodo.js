import React, { Component } from 'react';

class AddTodo extends Component {


    constructor(props) {
        super(props);
        this.state = {
            text:"22",
        }
    }

    render() {
        return (
            <div>
                <input value={this.state.text}/>
                <button>增加</button>
            </div>
        );
    }

    
}

export default AddTodo;