import React, { Component } from 'react';
import '../App.css';
import Item from './Item'


class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }

        console.log('list props ==>', props)
       
    }

    render() {

        const items = this.props.data;
        console.log('items ==>',items)

        return (
                <React.Fragment>
                    <ul>
                    {
                        items.map((item, i) => 
                            <Item key={i}  text={item} />
                        )
                    }
                    </ul>
                </React.Fragment>
            )
        }
    
    }   
// List.propTypes = {
//     index: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired
// }

export default List