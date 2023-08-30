import React from 'react';
import { useRoutes } from 'react-router-dom';

export const appRoutes = (props) => {
    const elements = useRoutes([
        {
            path: '/',
            element: <Main {...props}/>
        }, 
        {
            path: '/:id/:name/details',
            element: <Details {...props}/>
        }
    ]);
    return elements;
}
