import React, {Component} from 'react'
import { render } from 'react-dom';
import { Router, Route , hashHistory} from 'react-router'
import App from './components/app'
import Footer from  './components/Footer'
import Header from  './components/Header'
import Content from  './components/Content'


render(
    <Router history={hashHistory}>
        <Route component={App}>
            <Route path="/" components={{Header: Header, content: Content, Footer: Footer}} />
        </Route>
    </Router>,
    document.getElementById('root'));