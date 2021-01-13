import React from 'react';
import './App.css';
import Accordion from "./components/component/Accordion";
import AppTitle from "./components/component/AppTitle";
import Rating from "./components/component/Rating";

function App() {
    return (
        <div className='App'>
            <AppTitle/>
            <Rating value={1}/>
            <Accordion/>
            <Rating value={5}/>
        </div>
    );
}

export default App;
