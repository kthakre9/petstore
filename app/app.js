import React, {Component} from "react";
import { render } from "react-dom";
import { Router, Route , hashHistory} from "react-router";
import App from "./components/app";
import Footer from  "./components/Footer";
import Header from  "./components/Header";
import Content from  "./components/Content";
import DogsList from "./components/DogsList";
import "./style.scss";


render(
    <Router history={hashHistory}>
        <Route component={App}>
            <Route path="/" components={{Header: Header, content: Content, Footer: Footer}} />
            <Route path="/dogs" components={{Header: Header, content: DogsList, Footer: Footer}}/>
        </Route>
    </Router>,
    document.getElementById("root"));
