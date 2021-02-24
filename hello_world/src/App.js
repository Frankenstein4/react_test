import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import TodoList from './components/TodoList';

/* const todos = [
  {
    id:1,
    text:'学习1',
    completed:true
  },
  {
    id:2,
    text:'学习2',
    completed:false
  },
  {
    id:3,
    text:'学习3111111',
    completed:true
  }
] */
//const filter = "all";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        todos:[
          {
            id:2,
            text:'学习2',
            completed:false
          },
          {
            id:3,
            text:'学习3111111',
            completed:true
          }
        ],
        filter:"completed"
    }
} 

  render() {
    const {filter} = this.state;
    const todos = this.getVisibleTodos();
    return (
      <div className="App">
        <AddTodo/>
        <TodoList todos={todos}/>
        <Footer filter={filter}/>
      </div>
    );
  }

  getVisibleTodos = () =>{
    const fil = this.state.filter;
    return this.state.todos.filter(item=>{
      if(fil=="active"){
        return !item.completed
      }else if(fil=="completed"){
        return item.completed
      }else{
        return true;
      }
    })
}


}

export default App;
