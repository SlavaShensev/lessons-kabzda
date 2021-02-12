import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion stories',
    component: Accordion,
}

const users = [
    {title: 'Slava', value: 1},
    {title: 'Sasha', value: 2},
    {title: 'Oleg', value: 3},
    {title: 'Lesya', value: 4},
]

const callback = action('accordion mode event fired')
const onClick = action('some item was clicked')

export const MenuOnCollapsedMode = () => <Accordion slogan={'Menu'}
                                                    collapsed={true}
                                                    items={users}
                                                    onChange={callback}
                                                    onClick={onClick}
/>

export const MenuOffCollapsedMode = () => <Accordion slogan={'Menu'}
                                                     collapsed={false}
                                                     items={users}
                                                     onChange={callback}
                                                     onClick={onClick}
/>

export const ChangeCollapsedMode = () => {
    const [value, serValue] = useState<boolean>(true)
    return (
        <Accordion slogan={'Menu'}
                   collapsed={value}
                   onChange={() => serValue(!value)}
                   items={users}
                   onClick={(id)=> alert(`User with ID ${id} should be happy `)}
        />
    )

}