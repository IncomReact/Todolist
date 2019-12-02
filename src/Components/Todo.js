import React, { Component } from 'react';
import '../App.css';
import Form from './Form'


class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
          globalItems : []
        };
      }

     onUpdate = (dataForm) => {
		console.log('dataForm ==>', dataForm)
		if(this.state.globalItems.indexOf(dataForm) === false) {
			this.setState({   
				globalItems : [...this.state.globalItems, dataForm]
			});
		}
     } 

    

    render() {
        const globalItems = this.state.globalItems
        console.log('globalItems ===>',globalItems)
        
        return (
            <React.Fragment>
                <Form update={this.onUpdate} liststate={this.state.globalItems} />
            </React.Fragment>
        )
    }
}

export default Todo;