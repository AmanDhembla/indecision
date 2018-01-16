class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.makeDecision=this.makeDecision.bind(this);
        this.removeAll=this.removeAll.bind(this);
        this.addOption=this.addOption.bind(this);
        this.state={
            options:[]
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
    render(){
        const title="Indecision";
        const subtitle="put your life in the hands of the computer";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action makeDecision={this.makeDecision} hasOptions={this.state.options.length>0}/>
                <Options removeAll={this.removeAll} options={this.state.options}/>
                <AddOption addOption={this.addOption}/>
            </div>
        );
    }
}

const Header=(props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

// class Header extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action=(props)=>{
    return (
        <div>
            <button 
                onClick={props.makeDecision}
                disabled={!props.hasOptions}
            >
                What should i do
            </button>
        </div>
    );
}

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

const Option=(props)=>{
    return (
        <div>
            {props.option}
        </div>
    );
}

// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                 {this.props.option}
//             </div>
//         );
//     }
// }

const Options=(props)=>{
    return (
        <div>
            <button onClick={props.removeAll}>Remove All</button>
            {
                props.options.map((option)=>{
                    return <Option key={option} option={option} />;     
                })
            } 
        </div>
    );
}

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

class AddOption extends React.Component{
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

ReactDOM.render(<IndecisionApp />,document.getElementById("app"));
