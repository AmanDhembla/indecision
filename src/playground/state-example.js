class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne=this.addOne.bind(this);
        this.minusOne=this.minusOne.bind(this);
        this.reset=this.reset.bind(this);
        this.state={
            count: 0
        }
    }
    componentDidMount(){
        const num=JSON.parse(localStorage.getItem("count"));
        if(num){
            this.setState(()=>{
                return {
                    count: num
                }
            })
        }
    }
    componentDidUpdate(prevProp,prevState){
        if(prevState.count!=this.state.count){
            console.log("here");
            const num=JSON.stringify(this.state.count);
            localStorage.setItem("count",num);
        }
    }
    addOne(){
        this.setState((currentState)=>{
            return {
                count: currentState.count+1
            }
        });
    }
    minusOne(){
        if(this.state.count>0){
            this.setState((currentState)=>{
                return {
                    count: currentState.count-1
                }
            });
        }
    }
    reset(){
        this.setState(()=>{
            return {
                count: 0
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.addOne}>Add 1</button>
                <button onClick={this.minusOne}>Remove 1</button>
                <button onClick={this.reset}>Reset</button>                        
            </div>
        );
    }
}

ReactDOM.render(<Counter />,document.getElementById("app"));
