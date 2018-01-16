"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.makeDecision = _this.makeDecision.bind(_this);
        _this.removeAll = _this.removeAll.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "makeDecision",
        value: function makeDecision() {
            var num = Math.floor(Math.random() * this.state.options.length);
            console.log(this.state.options[num]);
        }
    }, {
        key: "removeAll",
        value: function removeAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "addOption",
        value: function addOption(option) {
            if (!option) {
                return "You cannot enter empty values";
            } else if (this.state.options.indexOf(option) > -1) {
                return "the value that you are trying to enter already exist";
            }
            this.setState(function (currentState) {
                return {
                    options: currentState.options.concat(option)
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indecision";
            var subtitle = "put your life in the hands of the computer";
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { makeDecision: this.makeDecision, hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, { removeAll: this.removeAll, options: this.state.options }),
                React.createElement(AddOption, { addOption: this.addOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

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

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                onClick: props.makeDecision,
                disabled: !props.hasOptions
            },
            "What should i do"
        )
    );
};

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

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        props.option
    );
};

// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                 {this.props.option}
//             </div>
//         );
//     }
// }

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.removeAll },
            "Remove All"
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, option: option });
        })
    );
};

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

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption() {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this));

        _this2.addOption = _this2.addOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "addOption",
        value: function addOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.addOption(option);
            this.setState(function () {
                return { error: error };
            });
            e.target.elements.option.value = "";
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.addOption },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
