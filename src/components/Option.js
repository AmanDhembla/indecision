import React from 'react';
const Option=(props)=>{
    return (
        <div>
            <p>{props.option}</p>
            <button onClick={(e)=>{
                e.preventDefault();
                props.remove(props.option);
            }}
            >
                Remove
            </button>
        </div>
    );
}

export default Option;

// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                 {this.props.option}
//             </div>
//         );
//     }
// }