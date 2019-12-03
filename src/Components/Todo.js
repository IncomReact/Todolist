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
        console.log('this.state.globalItems ===>',this.state.globalItems)
      }

      
      
     onUpdate = (dataForm) => {
<<<<<<< HEAD
        
        console.log('dataForm ==>', dataForm)
        // this.setState({   
        //     globalItems : [...this.state.globalItems, dataForm]
        // })
		if(this.state.globalItems.indexOf(dataForm) === false) {
			 this.setState({   
				globalItems : [...this.state.globalItems, dataForm]
			});
        }
        
=======
		    console.log('dataForm ==>', dataForm);
		    this.setState({   
			    globalItems : [...this.state.globalItems, dataForm]
		    });
>>>>>>> 8671d5a5148fc678c16eb6974524c8b0f1af038f
     } 

    

    render() {
        
        let globalItems = this.state.globalItems
        console.log('globalItems ===>', globalItems)
        
        return (
            <React.Fragment>
                <Form update={this.onUpdate} liststate={this.state.globalItems} />
                <List data={this.state.globalItems}/> 
            </React.Fragment>
        )
    }
}

export default Todo;