import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import TodoList from './components/TodoList';

const todos = [
  {
    id:1,
    text:'学习1',
    completed:true
  },
  {
    id:2,
    text:'学习2',
    completed:true
  },
  {
    id:3,
    text:'学习3',
    completed:true
  }
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo/>
        <TodoList todos={todos}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
