import React from 'react';
import './style.css';

import doCube from './one'
export default function App(){
    return (
        <div>
            <h1> Hello Rakesh </h1>
            <p> {doCube(5)}</p>
        </div>
    );
}