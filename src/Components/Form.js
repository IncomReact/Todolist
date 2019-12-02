import React, { Component } from 'react';
import '../App.css';
import List from './List'

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: [],
    };
    // console.log('this.state.items ==>',this.state.items)
  }

  
  
  onChange = (event) => {
    this.setState({text: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    if(this.state.text !== '') {
      this.setState({
        text: '',
        items: [...this.state.items, this.state.text]
      });
      this.props.update({dataForm : this.state.items});
    }
    
  }

    render() { 
      console.log('this.state.items', this.state.items)
      
        return (
            <React.Fragment>
                <form className="flex space-between" onSubmit={this.onSubmit}>
                    <input className="add-task" placeholder="Ajouter une tâche" value={this.state.text} onChange={this.onChange} />
                    <button>ADD</button>
                </form>
                
                <List data={this.state.items}/> 
                
            </React.Fragment>

            
        )
    }
}

export default Form