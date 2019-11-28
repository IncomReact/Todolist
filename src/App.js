import React, { Component } from 'react';
import './App.css';

class TodoList extends Component {
  
  constructor() {
    super();
    this.state = {
      text: '',
      items: [],
    };
  }

  onChange = (event) => {
    this.setState({ text: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    if(this.state.text !== '') {
      this.setState({
        text: '',
        items: [...this.state.items, {text : this.state.text , isChecked : false }]
      });
    }
  }

  toggleChange = (i) => {
    
    this.setState({
      items: this.state.items.map((item, id) => {
        if (id === i) {
          item.isChecked = !item.isChecked;
        }
        return item;
      })
    })
  }

    render() {
    
      const items = this.state.items;

      return (
        <div>
          <section className="flex flex-center">
            <h1>TodoList</h1>
         </section> 

          <section className="main">
            
            <form className="flex space-between" onSubmit={this.onSubmit}>
              <input className="add-task" placeholder="Ajouter une tâche" value={this.state.text} onChange={this.onChange} />
              <button>ADD</button>
            </form>
            <ul>
                {
                 items.map((item, i) => 
                    <div  key={i} className="flex">
                      <li className={item.isChecked ? 'line-through': ''}>{item.text}</li>
                      <input className="checkbox" type="checkbox" selected={item.isChecked} onClick={() => this.toggleChange(i)}/>
                    </div>
                  )
                }
              </ul>
          </section>
        </div>
    );
  }
}
export default TodoList;
