import React from 'react';

function Accordion() {
    return (
        <div className='Accordion'>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
}

const AccordionTitle = () => {
    return (
        <div>
            <h3>Меню</h3>
        </div>
    )
}

const AccordionBody = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion;