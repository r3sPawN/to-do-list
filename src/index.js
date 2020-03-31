import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class ToDoList extends React.Component {
  state = {
    todos:[ 
      { 
       id: 1,
       title: 'Go shoping',
       disabled: true
      },
      
      { 
        id: 2,
        title: 'Spam viber',
        disabled: true
      },
      
      { 
        id: 3,
        title: 'Take out the trashhh',
        disabled: true
      }
    ],
  }
  

  handleDeleteOnClick(event, todoId) {
    const { todos } = this.state;
    this.setState({todos: todos.filter( todo => todo.id !== todoId)});
  }

  handleAddOnClick = (event) => {
    const {todos} = this.state;
    const taskCount = todos.length;
    todos.push({id: taskCount + 1 , title: '', disabled: true});
    this.setState({todos: todos});
  }

  handleChange(event, todoId) {
    const newList = this.state.todos.slice();
    
    newList.forEach(element => {
      if(element.id === todoId) {
        element.title = event.target.value;
        this.setState({newList});  
      }
    })  
  }

  handleEditOnClick(event,todoId) {
    const {todos} = this.state;
    todos.forEach(element => { 
      if(element.id === todoId) {
        element.disabled = false;
      }
    })
    this.setState({todos: todos})
  }
  
  handleOnEnterPress = (event) => {
  const {todos} = this.state;
    if(event.key === 'Enter') {
    todos.forEach(element => { 
      if(element.disabled === false) {
          element.disabled = true;
        }
    })    
    this.setState({todos: todos})
    } 
  }

  render() {
    return (
      <div>
        <button className="add-new-task" onClick={this.handleAddOnClick}>Add New Task</button> 
        {this.state.todos.map( todo => <div className="to-do-container" key={todo.id}> 
            <button onClick={(event) => this.handleEditOnClick(event,todo.id)}>Edit</button>
            <input 
            disabled={todo.disabled} 
            type="text"
            onKeyPress={this.handleOnEnterPress} 
            value={todo.title} 
            onChange={(event) => this.handleChange(event, todo.id)}/>
            <button onClick={(event) => this.handleDeleteOnClick(event, todo.id)}>Delete</button> 
          </div> ) }
      </div>
    )
  }
}

ReactDOM.render(
  <ToDoList />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
