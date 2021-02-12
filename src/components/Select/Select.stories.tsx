import {Select} from "./Select";
import React from "react";

export default {
    title: 'Select stories',
    component: Select
}

const citys = [
    {title: 'Odessa', id: 1},
    {title: 'Kiev', id: 2},
    {title: 'Lvov', id: 2},
    {title: 'Moscow', id: 2},
]

export const MenuOnCollapsedMode = () => <Select collapsed={false}
                                                 items={citys}
                                                 city={'City'}
/>