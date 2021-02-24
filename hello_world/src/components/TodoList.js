import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        const {todos} = this.props;
        console.log(todos);
        return (
            <div>
               <ul>
                   {
                       todos.map(i=>{
                           return <Todo key={i.id} {...i}/>
                       })
                   }
               </ul>
            </div>
        );
    }
}

export default TodoList;