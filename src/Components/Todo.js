import React, { Component } from 'react';
import '../App.css';
import Form from './Form'
import List from './List'


class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
          globalItems : []
        };
      }

      
     onUpdate = (dataForm) => {
<<<<<<< HEAD
        console.log('dataForm ==>', dataForm)
        
         this.setState({   
            globalItems : [...this.state.globalItems, dataForm]
        })
=======
		console.log('dataForm ==>', dataForm)
		if(this.state.globalItems.indexOf(dataForm) === false) {
			this.setState({   
				globalItems : [...this.state.globalItems, dataForm]
			});
		}
>>>>>>> 8c6b8d2f2fb67bbf6638ddc41319b4e3b9bd721e
     } 

    

    render() {
        // const globalItems = this.state.globalItems
        // console.log('globalItems ===>',globalItems)
        
        return (
            <React.Fragment>
<<<<<<< HEAD
                <Form update = {this.onUpdate}/>
                <List data={this.state.globalItems}/>
=======
                <Form update={this.onUpdate} liststate={this.state.globalItems} />
>>>>>>> 8c6b8d2f2fb67bbf6638ddc41319b4e3b9bd721e
            </React.Fragment>
        )
    }
}

export default Todo;