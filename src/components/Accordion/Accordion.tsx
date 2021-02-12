import React from 'react';

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    slogan: string
    collapsed: boolean
    items: ItemType[]
    onChange: () => void
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div className='Accordion'>
            <AccordionTitle slogan={props.slogan}
                            onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody
                items={props.items}
                onClick={props.onClick}
            />}
        </div>
    )
}

type AccordionTitleType = {
    slogan: string
    onChange: () => void
}

const AccordionTitle = (props: AccordionTitleType) => {
    return (
        <h2 onClick={(e) => props.onChange()}>
            {props.slogan}
        </h2>
    )
}

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = (props: AccordionBodyType) => {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={()=> props.onClick(i.value)}
                                               key={index}>{i.title}</li>)}
        </ul>
    )
}

