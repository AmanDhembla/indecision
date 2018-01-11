"use strict";

// here we are going to wtrie our jsx
var app = {
    title: "Indecision App",
    subtitle: "put your life in the hands of a fucking computer",
    options: []
};
var subtitle = function subtitle(text) {
    if (text) {
        return React.createElement(
            "p",
            null,
            text
        );
    }
};
//instead we can use ternary operator
var option = function option() {
    if (app.options.length > 0) return React.createElement(
        "p",
        null,
        "here are your options"
    );else return React.createElement(
        "p",
        null,
        "No options"
    );
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
    }
    e.target.elements.option.value = "";
    rOriginal();
};

var removeAll = function removeAll() {
    app.options = [];
    rOriginal();
};

var number = 0;
var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomNum]);
};
var rOriginal = function rOriginal() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        subtitle(app.subtitle),
        React.createElement(
            "button",
            { onClick: removeAll },
            "Remove All"
        ),
        React.createElement(
            "button",
            { disabled: app.options.length == 0, onClick: onMakeDecision },
            "What should i do?"
        ),
        option(),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                number++;

                return React.createElement(
                    "li",
                    { key: number },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "add option"
            )
        )
    );
    ReactDOM.render(template, document.getElementById("app"));
};

var username = "Aman Dhembla";
var age = 20;
var ulocation = "India";
var template1 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        username
    ),
    React.createElement(
        "p",
        null,
        "age:",
        age
    ),
    React.createElement(
        "p",
        null,
        "location:",
        ulocation
    )
);

var count = 0;
var add1 = function add1() {
    count = count + 1;
    renderTemplate();
};

var minus1 = function minus1() {
    if (count > 0) {
        count = count - 1;
        renderTemplate();
    }
};

var reset = function reset() {
    count = 0;
    renderTemplate();
};
var renderTemplate = function renderTemplate() {
    var template2 = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Today's count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: add1 },
            "Add 1"
        ),
        React.createElement(
            "button",
            { onClick: minus1 },
            "Remove 1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "Reset"
        )
    );

    ReactDOM.render(template2, document.getElementById("app"));
};
//renderTemplate();
//rOriginal();

//ReactDOM.render(template,document.getElementById("app"));

var score = 0;

var toggle = function toggle() {
    if (score == 0) {
        score = 1;
        contest();
    } else {
        score = 0;
        contest();
    }
};

var contest = function contest() {
    var template4 = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggle },
            score == 1 ? "hide details" : "show details"
        ),
        React.createElement(
            "p",
            null,
            score == 1 ? "yo yo this is so fun" : ""
        )
    );
    ReactDOM.render(template4, document.getElementById("app"));
};

contest();
