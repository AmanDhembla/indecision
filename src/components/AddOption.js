import React from 'react';

export default class AddOption extends React.Component{
    state={
        error:undefined
    }
    addOption=(e)=>{
        e.preventDefault();
        let option=e.target.elements.option.value.trim();
        const error=this.props.addOption(option);
        this.setState(()=>{
            return {error: error}
        });
        e.target.elements.option.value="";
    }
    render(){
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.addOption}>
                    <input className='add-option-input' type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}