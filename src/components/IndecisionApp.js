import AddOption from './AddOption'
import Options from './Options';
import Action from './Action';
import Header from './Header';
import React from 'react';
export default class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.makeDecision=this.makeDecision.bind(this);
        this.removeAll=this.removeAll.bind(this);
        this.addOption=this.addOption.bind(this);
        this.remove=this.remove.bind(this);
        this.state={
            options:[]
        }
    }
    componentDidMount(){
        const opt=JSON.parse(localStorage.getItem("options"));
        if(opt){
            this.setState(()=>{
                return {options:opt}
            })
        }
    }
    componentDidUpdate(prevProp,prevState){
        if(prevState.options.length!==this.state.options.length){
            const json=JSON.stringify(this.state.options);
            localStorage.setItem("options",json);           
        }
    }
    makeDecision(){
        const num=Math.floor(Math.random()*this.state.options.length);
        console.log(this.state.options[num]);
    }
    removeAll(){
        this.setState(()=>{
            return({
                options: []
            })
        })
    }
    addOption(option){
        if(!option){
            return "You cannot enter empty values";
        }
        else if(this.state.options.indexOf(option)>-1){
            return "the value that you are trying to enter already exist";
        }
        this.setState((currentState)=>{
            return {
                options: currentState.options.concat(option)
            }
        });
    }
    remove(option){
        this.setState((currentState)=>{
            return{
                options: currentState.options.filter((opt)=>{
                    return opt !== option;
                })
            }
        })
    }
    render(){
        const title="Indecision";
        const subtitle="put your life in the hands of the computer";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action makeDecision={this.makeDecision} hasOptions={this.state.options.length>0}/>
                <Options removeAll={this.removeAll} options={this.state.options} remove={this.remove}/>
                <AddOption addOption={this.addOption}/>
            </div>
        );
    }
}

