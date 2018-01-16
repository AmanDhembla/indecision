class IndecisionApp extends React.Component{
    render(){
        const title="Indecision";
        const subtitle="put your life in the hands of the computer";
        const options=["one","two","three"];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}
class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    makeDecision(){
        alert("hello");
    }
    render(){
        return (
            <div>
                <button onClick={this.makeDecision}>What should i do</button>
            </div>
        );
    };
}

class Option extends React.Component{
    render(){
        return (
            <div>
                {this.props.option}
            </div>
        );
    }
}

class Options extends React.Component{
    constructor(props){
        super(props);
        this.removeAll=this.removeAll.bind(this);
    }
    removeAll(){
            console.log(this.props.options);
    }
    render(){
        return (
            <div>
                <button onClick={this.removeAll}>Remove All</button>
                {
                    this.props.options.map((option)=>{
                        return <Option key={option} option={option} />;     
                    })
                } 
            </div>
        );
    }
}

class AddOption extends React.Component{
    addOption(e){
        e.preventDefault();
        let option=e.target.elements.option.value.trim();
        if(option){
            console.log(option);
            e.target.elements.option.value="";
        }
        
    }
    render(){
        return (
            <div>
                <form onSubmit={this.addOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById("app"));
