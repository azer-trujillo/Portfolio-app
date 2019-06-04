import React from 'react';
import { Link } from 'react-router-dom';

export const portfolioPage = () => (
        <div>
            <h1>My Work</h1>
            Check out the things I've done:
            <Link to="/portfolio/1">Item One</Link>
            <Link to="/portfolio/2">Item Two</Link>
        </div>
    );