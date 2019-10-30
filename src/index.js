import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import Team from './components/Team';
import About from './components/About';
import Donate from './components/Donate';
import Main from './containers/Main';
import FAQ from './components/FAQ';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch,HashRouter } from "react-router-dom";
import Contact from './components/Contact';
import DonateGood from './components/DonateGood';
import DonateFail from './components/DonateFail';
ReactDOM.render(
    
    <HashRouter  basename={process.env.PUBLIC_URL}>
        <Main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/team" component={Team} />
                <Route exact path="/about" component={About} />
                <Route exact path="/donate" component={Donate} />
                <Route exact path="/faq" component={FAQ} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/donategood" component={DonateGood} />
                <Route exact path="/donatefail" component={DonateFail} />
            </Switch>
        </Main>
    </HashRouter>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
