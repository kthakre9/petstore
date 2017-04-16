import React, {Component} from "react";
import { render } from "react-dom";
import { Router, Route , hashHistory} from "react-router";
import App from "./components/app";
import Footer from  "./components/Footer";
import Header from  "./components/Header";
import Content from  "./components/Content";
import DogsList from "./components/DogsList";
import Dogs from "./components/Dogs";
import "./style.scss";
import { Provider } from 'react-redux';
import configureStore from './redux/store';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route component={App}>
                <Route path="/" components={{Header: Header, content: Content, Footer: Footer}} />
                <Route path="/pets" components={{Header: Header, content: DogsList}} />
                <Route path="/pets/:id" components={{Header: Header, content: Dogs}} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root"));
