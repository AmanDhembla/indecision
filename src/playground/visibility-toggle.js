class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.check=this.check.bind(this);
        this.state={
            visibility: false
        }
    }
    check(){
        this.setState((currentState)=>{
            return {
                visibility: !currentState.visibility
            }
        });
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.check}>{this.state.visibility?"Hide Details":"Show Details"}</button>
                <p>{this.state.visibility?"Hey! these are some details you can see":""}</p>
            </div>
        );
    }
}

ReactDOM.render(<Toggle />,document.getElementById("app"));