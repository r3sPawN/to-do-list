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
       taskComplete: 'false'
      },
      
      { 
        id: 2,
        title: 'Spam viber',
        taskComplete: 'false'
      },
      
      { 
        id: 3,
        title: 'Take out the trashhh',
        taskComplete: 'false'
      }
    ]
  }

  handleDeleteOnClick(event, todoId) {
    this.setState({todos: this.state.todos.filter( todo => todo.id !== todoId)})
  }

  handleAddOnClick(event) {
    const taskCount = this.state.todos.length;
    this.state.todos.push({id: taskCount + 1 , title: '', taskComplete: 'false'})
    this.setState({todos: this.state.todos})
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
  
  render() {
    return (
      <div>
        <button className="add-new-task" onClick={(event) => this.handleAddOnClick(event)}>Add New Task</button> 
        {this.state.todos.map( todo => <div className="to-do-container" key={todo.id}> 
            <input type="text" value={todo.title} onChange={(event) => this.handleChange(event, todo.id)}/>
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
