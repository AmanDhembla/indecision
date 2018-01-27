import React from 'react';

export default class AddOption extends React.Component{
    constructor(){
        super();
        this.addOption=this.addOption.bind(this);
        this.state={
            error:undefined
        }
    }
    addOption(e){
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}