/** @jsx React.DOM */

var Hero = require('./ui/hero');
var Menu = require('./ui/menu');
var Content = require('./ui/content');

var React = window.React = require('react'),
    mountNode = document.getElementById("app");

var App = React.createClass({
  render: function() {
    return (
      <div className="app-container">
        <Hero />
        <Menu />
        <Content />
      </div>
    );
  }
});


React.render(<App />, mountNode);

