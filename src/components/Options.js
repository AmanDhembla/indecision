import React from 'react';
import Option from './Option';
const Options=(props)=>{
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__h3">Your Options</h3>
                <button className="button--link" onClick={props.removeAll}>Remove All</button>
            </div>
            {props.options.length==0&& <p className="widget-message">Please add an Option to get started</p> }
            {
                props.options.map((option,index)=>{
                    return <Option key={option} count={index+1} option={option} remove={props.remove} />;     
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