import React, {useState} from 'react';

type AccordionPropsType = {
    slogan?: string
    collapsed?: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [on, setOn] = useState(false)
    return (
        <div className='Accordion'>
            <AccordionTitle slogan={props.slogan}/>
            <button onClick={() => {
                setOn(!on)
            }}>TOGGLE
            </button>
            {!on && <AccordionBody/>}
        </div>
    )
}

type AccordionTitle = {
    slogan?: string
}
const AccordionTitle = (props: AccordionTitle) => {
    return (
        <div>
            {props.slogan}
        </div>
    )
}
type AccordionBody = {
    slogan: string
}
const AccordionBody = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
            </ul>
        </div>
    )
}

export default UncontrolledAccordion;