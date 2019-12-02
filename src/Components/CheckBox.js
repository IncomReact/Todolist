import React, { Component } from 'react';
import '../App.css';

class CheckBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isChecked : false 
        }
    }

    toggleClick = () => {
        this.setState({
            isChecked : !this.state.isChecked
        })
        this.props.onTartiFlette(!this.state.isChecked);
    }

    render() {
        // console.log('isChecked ==>', this.state.isChecked)
        return (
            <React.Fragment>
                <input className="checkbox" defaultChecked={this.state.isChecked} type="checkbox" onChange={this.toggleClick}/>
            </React.Fragment>
        )
    }
}   
export default CheckBox

// const CheckBoxTodo = (props) => {

//     const [IsChecked, setIsChecked] = useState(false);

//     const handleChange = () => {
//         setIsChecked(!IsChecked);
//         props.onTartiFlette(!IsChecked)
//     };

//     return (
//         <React.Fragment>
//             <input className="checkbox" defaultChecked={IsChecked} type="checkbox" onChange={handleChange}/>
//         </React.Fragment>
//     )
// }   
// export default CheckBoxTodo