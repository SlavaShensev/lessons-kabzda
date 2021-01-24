import React, {useState} from 'react';

type AccordionPropsType = {
    slogan: string
    collapsed?: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [on, setOn] = useState(false)
    return (
        <div className='Accordion'>
            <AccordionTitle slogan={props.slogan}
                            onClick={() => {
                                setOn(!on)
                            }}
            />
            {!on && <AccordionBody/>}
        </div>
    )
}

type AccordionTitle = {
    slogan?: string
    onClick: () => void
}
const AccordionTitle = (props: AccordionTitle) => {
    return <h3 onClick={() => {
        props.onClick()
    }}>
        {props.slogan}
    </h3>
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
            </ul>
        </div>
    )
}

export default UncontrolledAccordion;