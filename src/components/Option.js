import React from 'react';
const Option=(props)=>{
    return (
        <div className="option">
            <p className="option__text">{props.count +". "+ props.option}</p>
            <button className="button button--link" onClick={(e)=>{
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