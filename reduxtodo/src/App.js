import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <h1> To Do List </h1>
      {
        props.todos.map((item) => {
          return (
            <div>
              <p>
              {
                item.value
              }
              </p>
            </div>
          )
        })
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App); 
