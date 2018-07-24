import React,{ Component } from 'react';
// import '../css/styles.css'
// enable of webpack modules needed for import classes
import classes from '../css/styles.css'

// 1st class base component 
class Header extends Component {
state = {
    passKeywords:''
}

inputChangeHandler = (event) => {
    this.setState({
        passKeywords:event.target.value
    });
}
render() {
    console.log(this.props.passFilted)
    return (
    <header>  
        <div className={classes.logo}>Logo</div>
        <input
            type='text'
            onChange={this.props.passKeywords}
        />
        <div>
            {this.props.passFilted}
        </div>
        {/*<div>{this.state.keywords}</div> */}
    </header>
    )
 }
}

// functional component
// const Header = (props) => {
//     return(
//         <header>  
//         <div className={classes.logo}>Logo</div>
//         <input
//             type='text'
//             onChange={props.passKeywords}
//         />        
//         <div>
//             {props.passFilted}
//         </div>
//     </header>
//     )
// }
   

export default Header;