import React, { Component } from 'react';
import '../App.css';
// import List from './List'

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: [],
	  };
	  this.isSubmitting = false;
  }

  onChange = (event) => {
    this.setState({text: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    if(this.state.text !== '') {
		this.isSubmitting = true;
      this.setState({
        text: '',
        items: [...this.state.items, this.state.text]
    }
    , () => {
		  this.props.update(this.state.items);
	// 	// ICI dans le cas du callBack, c'ets bien plus intéressant que le CWU car evite les boucles infinits. 
    })  
    }
  }
  // componentDidUpdate() {
	// if(this.isSubmitting) {
	// 	this.props.update({dataForm : this.state.items});
	// 	this.isSubmitting = false;
	// }
  // }

    render() { 
	  // console.log('this.state.items', this.state.items);
    
        return (
            <React.Fragment>
                <form className="flex space-between" onSubmit={this.onSubmit}>
                    <input className="add-task" placeholder="Ajouter une tâche" value={this.state.text} onChange={this.onChange} />
                    <button>ADD</button>
                </form>    
            </React.Fragment>   
        )
    }
}

export default Form