import React from 'react';

type ItemType = {
    title: string
    id: any
}

type SelectTypeProps = {
    collapsed: boolean
    items: ItemType[]
    city: string
}

export function Select(props: SelectTypeProps) {
    return (
        <div>
            <SelectTitle city={'City'}/>
            {!props.collapsed && <SelectBody items={props.items}/>}
        </div>
    )
}

type SelectTitleTypeProps = {
    city: string
}

const SelectTitle = (props: SelectTitleTypeProps) => {
    return (
        <h2>
            {props.city}
        </h2>
    )
}

type SelectBodyTypeProps = {
    items: ItemType[]
}

const SelectBody = (props: SelectBodyTypeProps) => {
    return (
        <ul>
            {props.items.map( (el)=> {
                return <li>
                    {el.title}
                </li>
            } )}
        </ul>
    )
}