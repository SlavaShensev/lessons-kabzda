import {Select} from "./Select";
import React from "react";
import {action} from "@storybook/addon-actions";

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

export const WithValue = () =>
    <>
        <Select onChange={action('Value ')}
                items={citys}
                value={2}
        />
    </>

export const WithoutValue = () =>
    <>
        <Select onChange={action('Value ')}
                items={citys}
        />

    </>

