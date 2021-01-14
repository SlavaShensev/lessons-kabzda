import React from 'react';
import './App.css';
import OnOff from "./components/component/OnOff/OnOff";
import UncontrolledAccordion
    from "./components/component/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/component/UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div className='App'>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledAccordion slogan={'Menu'}/>
            <UncontrolledAccordion slogan={'Menu'}/>
        </div>
    );
}

export default App;
