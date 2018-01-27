import React from 'react';
const Action=(props)=>{
    return (
        <div >
            <button className="big-button"
                onClick={props.makeDecision}
                disabled={!props.hasOptions}
            >
                What should i do
            </button>
        </div>
    );
}

export default Action;

// class Action extends React.Component{
//     render(){
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.makeDecision}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should i do
//                 </button>
//             </div>
//         );
//     };
// }