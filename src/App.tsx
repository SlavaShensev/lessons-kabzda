import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion
    from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";


function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)

    return (
        <div className='App'>
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<Accordion slogan={'Hello'} collapsed={false}/>*/}
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
