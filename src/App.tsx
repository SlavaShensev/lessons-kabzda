import React from 'react';
import './App.css';
import OnOff from "./components/component/OnOff/OnOff";
import UncontrolledAccordion
    from "./components/component/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/component/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/component/Accordion/Accordion";

function App() {
    return (
        <div className='App'>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <Accordion slogan={'Hello'} collapsed={false}/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledAccordion slogan={'Menu'}/>
            <UncontrolledAccordion slogan={'Menu'}/>
        </div>
    );
}

export default App;
