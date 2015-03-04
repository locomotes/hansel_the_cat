/** @jsx React.DOM */

var Hero = require('./ui/hero');
var Menu = require('./ui/menu');
var Content = require('./ui/content');

var React = window.React = require('react'),
    mountNode = document.getElementById("app");

var App = React.createClass({
  getInitialState: function() {
    return {
      showMenu: false
    };
  },
  onShowHide: function() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  },
  render: function() {
    return (
      <div className="app-container">
        <div className="hero-container" style={{height: this.state.showMenu ? "95vh" : "100vh"}}>
          <Hero />
          <div className="menu-link" onClick={this.onShowHide}>
            <span>M</span>
            <span>O</span>
            <span>R</span>
            <span>E</span>
            <span>M</span>
            <span>E</span>
            <span>O</span>
            <span>W</span>
          </div>
        </div>
        <Menu show={this.state.showMenu}/>
        <Content />
      </div>
    );
  }
});


React.render(<App />, mountNode);

