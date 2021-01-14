import React from 'react';
import './App.css';
import Accordion from "./components/component/Accordion/Accordion";
import AppTitle from "./components/component/AppTitle";
import Rating from "./components/component/Rating/Rating";
import OnOff from "./components/component/OnOff/OnOff";
import UncontrolledAccordion
    from "./components/component/UncontrolledAccordion/UncontrolledAccordion";


function App() {
    return (
        <div className='App'>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <UncontrolledAccordion slogan={'Menu'}/>
            <UncontrolledAccordion slogan={'Menu'}/>
        </div>
    );
}

export default App;
