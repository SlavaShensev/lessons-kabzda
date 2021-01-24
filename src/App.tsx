import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/component/OnOff/OnOff";
import UncontrolledAccordion
    from "./components/component/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/component/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/component/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/component/Rating/Rating";

function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)

    return (
        <div className='App'>
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            <Accordion slogan={'Hello'} collapsed={false}/>
            {/*<UncontrolledRating/>*/}
            {/*<Rating value={ratingValue}*/}
            {/*        onClick={setRatingValue}*/}
            {/*/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledAccordion slogan={'Menu'}/>*/}
            {/*<UncontrolledAccordion slogan={'Menu'}/>*/}
        </div>
    );
}

export default App;
