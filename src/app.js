class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>put your life in the hands of the computer</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What should i do</button>
            </div>
        );
    };
}

class Options extends React.Component{
    render(){
        return (
            <div>
                <p>Options component here</p>
            </div>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return (
            <div>
                <p>AddOption component here</p>
            </div>
        );
    }
}

const jsx=(
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx,document.getElementById("app"));
