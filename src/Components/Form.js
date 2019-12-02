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
<<<<<<< HEAD
        items: [...this.state.items, this.state.text], 
      })
      // this.props.update({dataForm : this.state.items});
    }    
=======
        items: [...this.state.items, this.state.text]
	  }, () => {
		//   this.props.update({dataForm : this.state.items});
		// ICI dans le cas du callBack, c'ets bien plus intéressant que le CWU car evite les boucles infinits. 
	});
      
    }
    
>>>>>>> 8c6b8d2f2fb67bbf6638ddc41319b4e3b9bd721e
  }
  componentDidUpdate() {
	if(this.state.items !== this.props.liststate) {
		this.props.update({dataForm : this.state.items});
	}
  }

  componentDidUpdate() {
    if (this.state.items.length !== 0 ) {
      this.props.update({dataForm : this.state.items});
    } 
   }
   

  

    render() { 
<<<<<<< HEAD
      // console.log('this.state.items', this.state.items)
      
=======
	  console.log('this.state.items', this.state.items);
    
>>>>>>> 8c6b8d2f2fb67bbf6638ddc41319b4e3b9bd721e
        return (
            <React.Fragment>
                <form className="flex space-between" onSubmit={this.onSubmit}>
                    <input className="add-task" placeholder="Ajouter une tâche" value={this.state.text} onChange={this.onChange} />
                    <button>ADD</button>
                </form>
                
                {/* <List data={this.state.items}/>  */}
                
            </React.Fragment>

            
        )
    }
}

export default Form