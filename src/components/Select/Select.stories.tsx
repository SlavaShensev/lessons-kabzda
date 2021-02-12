import {Select} from "./Select";
import React, {useState} from "react";

export default {
    title: 'Select stories',
    component: Select
}

const citys = [
    {title: 'Rogan', id: 1},
    {title: 'Odessa', id: 2},
    {title: 'Kiev', id: 3},
    {title: 'Lvov', id: 4},
    {title: 'Moscow', id: 5},
]

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return <>
        <Select onChange={setValue}
                items={citys}
                value={value}
        />
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>
        <Select onChange={setValue}
                value={value}
                items={citys}
        />

    </>

}