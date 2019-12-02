import React, { Component } from 'react'
import '../App.css';
import Checkbox from './CheckBox'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone : false
        }
    
        // this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (bool) => {
        this.setState({
            isDone : bool
        });
    }
    render() {
        
        // console.log('this.props Item ==>',this.props);
        const { isDone } = this.state;
        const { text } = this.props;

        return (
            <React.Fragment>
                <div className="flex">
                    <li className={isDone ? 'line-through' : ''} >{text}</li>
                    <Checkbox onTartiFlette={this.handleChange} />
                </div>
            </React.Fragment>
        )
    }
}

export default Item
