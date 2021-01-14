import React from 'react';
import './App.css';
import Accordion from "./components/component/Accordion";
import AppTitle from "./components/component/AppTitle";
import Rating from "./components/component/Rating";

function App() {
    return (
        <div className='App'>
            <AppTitle title={'App component'}/>
            <Rating value={3}/>
            <Accordion slogan={'Menu'} collapsed={true}/>
            <Accordion slogan={'Menu'} collapsed={false}/>
        </div>
    );
}

export default App;
