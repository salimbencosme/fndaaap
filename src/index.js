import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import Main from './containers/Main';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch,HashRouter } from "react-router-dom";
ReactDOM.render(
    
    <HashRouter  basename={process.env.PUBLIC_URL}>
        <Main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/features" component={Features} />
                <Route exact path="/about" component={About} />
            </Switch>
        </Main>
    </HashRouter>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
