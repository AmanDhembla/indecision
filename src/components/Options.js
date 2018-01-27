import React from 'react';
import Option from './Option';
const Options=(props)=>{
    return (
        <div>
            <button className="button--link" onClick={props.removeAll}>Remove All</button>
            {
                props.options.map((option)=>{
                    return <Option key={option} option={option} remove={props.remove} />;     
                })
            } 
        </div>
    );
} 

export default Options; 

// class Options extends React.Component{
//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.removeAll}>Remove All</button>
//                 {
//                     this.props.options.map((option)=>{
//                         return <Option key={option} option={option} />;     
//                     })
//                 } 
//             </div>
//         );
//     }
// }