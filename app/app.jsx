var React = require('react');
var ReactDOM = require('react-dom');

//create new variable

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load foundation

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();


//it is exactly same we have done above
//var Route = require('react-router').Route

ReactDOM.render(
  // SETUP router component
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="about" component={About}/>
        <Route path="examples" component={Examples}/>
        <IndexRoute component={Weather}/>

    </Route>
  </Router>,
    document.getElementById('app')
);
