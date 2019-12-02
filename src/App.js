import React from 'react';
import './App.css';
import Title from './Components/Title'
import Todo from './Components/Todo'
// import RenderTodos from './RenderTodos'

function App() {
  return (
    <React.Fragment>
      <section className="main">
        <Title/>
        <Todo/>
      </section>
    </React.Fragment>
  ) 
}

export default App