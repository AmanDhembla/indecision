// here we are going to wtrie our jsx
const app={
    title:"Indecision App",
    subtitle:"put your life in the hands of a fucking computer",
    options: []
}
const subtitle = (text) => {
    if(text){
        return <p>{text}</p>;
    }
}
//instead we can use ternary operator
const option = () => {
    if(app.options.length>0)
        return <p>here are your options</p>;
    else
        return <p>No options</p>
}

const onFormSubmit=(e)=>{
    e.preventDefault();
    const option=e.target.elements.option.value;
    if(option){
        app.options.push(option);
    }
    e.target.elements.option.value="";
    rOriginal();
}

const removeAll=()=>{
    app.options=[];
    rOriginal();
}

let number=0;
const onMakeDecision=()=>{
    let randomNum=Math.floor(Math.random()*app.options.length);
    alert(app.options[randomNum]);
}
const rOriginal=()=>{
const template=(
            <div>
                <h1>{app.title}</h1>
                {subtitle(app.subtitle)}
                <button onClick={removeAll}>Remove All</button>
                <button disabled={app.options.length==0} onClick={onMakeDecision}>What should i do?</button>
                {option()}
                <ol>
                    {
                         app.options.map((option)=>{
                             number++;

                             return <li key={number}>{option}</li>;
                         })
                    }                    
                </ol>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>add option</button>
                </form>
            </div>
);
ReactDOM.render(template,document.getElementById("app"));
}

var username="Aman Dhembla";
var age=20;
var ulocation="India";
const template1=(
    <div>
        <h1>{username}</h1>
        <p>age:{age}</p>
        <p>location:{ulocation}</p>
    </div>
);

let count=0;
const add1=()=>{
    count=count+1;
    renderTemplate();
}

const minus1=()=>{
    if(count>0){
        count=count-1;
        renderTemplate();
    }
}

const reset=()=>{
    count=0;
    renderTemplate();
}
const renderTemplate=()=>{
const template2=(
    <div>
        <h1>Today's count: {count}</h1>
        <button onClick={add1}>Add 1</button>
        <button onClick={minus1}>Remove 1</button>
        <button onClick={reset}>Reset</button>
    </div>  
);

 ReactDOM.render(template2,document.getElementById("app"));
}
//renderTemplate();
 rOriginal();

//ReactDOM.render(template,document.getElementById("app"));

let score=0;

const toggle=()=>{
    if(score==0){
        score=1;
        contest();
    }else{
        score=0;
        contest();
    }

}

const contest=()=>{
const template4=(
    <div>
        <h1>Visibility toggle</h1>
        <button onClick={toggle}>{score==1 ? "hide details" : "show details"}</button>
        {<p>{score==1 ? "yo yo this is so fun" :""}</p>}
    </div>
);
ReactDOM.render(template4,document.getElementById("app"));
}

//contest();

