import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { Header } from '../components/Header';
import { homePage } from '../components/homePage';
import { portfolioPage } from '../components/portfolioPage.js';
import { portfolioItemPage } from '../components/portfolioItemPage';
import { contactPage } from '../components/contactPage';
import { notFoundPage } from '../components/notFoundPage';


export const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={homePage} exact={true} />
                <Route path="/portfolio" component={portfolioPage} exact={true} />
                <Route path="/portfolio/:id" component={portfolioItemPage} />
                <Route path="/contact" component={contactPage} />
                <Route component={notFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);