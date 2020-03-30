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

  render() {
    return (
      <div className="to-do-container"> 
        {this.state.todos.map( todo => <div className="to-do-container" key={todo.id}> 
            {todo.title}
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
