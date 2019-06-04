import React from 'react';

export const portfolioItemPage = (props) => {
    console.log(props);
    return (
        <div>
            <h1>A Think I've Done</h1>
            This page is for the item of {props.match.params.id}!
        </div>
    );
};