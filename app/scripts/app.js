/** @jsx React.DOM */

var React = window.React = require('react'),
    mountNode = document.getElementById("app");

var App = React.createClass({
  render: function() {
    return (
      <div className="app-container">
        <div className="hero-unit">
          <div className="text">
            <span>HANSEL THE CAT</span><span className="hot">So hot right now...</span>
          </div>
          <div className="icon">
            <a href="https://instagram.com/that_hansels_so_hot_right_now/?modal=true" target="_blank">
              <svg className="instagram" 
                viewBox="0 0 512 512">
                <path d="M365.3 234.1h-24.7c1.8 7 2.9 14.3 2.9 21.9 0 48.3-39.2 87.5-87.5 87.5 -48.3 0-87.5-39.2-87.5-87.5 0-7.6 1.1-14.9 2.9-21.9h-24.7V354.4c0 6 4.9 10.9 10.9 10.9H354.4c6 0 10.9-4.9 10.9-10.9V234.1H365.3zM365.3 157.6c0-6-4.9-10.9-10.9-10.9h-32.8c-6 0-10.9 4.9-10.9 10.9v32.8c0 6 4.9 10.9 10.9 10.9h32.8c6 0 10.9-4.9 10.9-10.9V157.6zM256 201.3c-30.2 0-54.7 24.5-54.7 54.7 0 30.2 24.5 54.7 54.7 54.7 30.2 0 54.7-24.5 54.7-54.7C310.7 225.8 286.2 201.3 256 201.3M365.3 398.1H146.7c-18.1 0-32.8-14.7-32.8-32.8V146.7c0-18.1 14.7-32.8 32.8-32.8h218.7c18.1 0 32.8 14.7 32.8 32.8v218.7C398.1 383.4 383.5 398.1 365.3 398.1"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="menu-container">
        </div>
      </div>
    );
  }
});


React.render(<App />, mountNode);

