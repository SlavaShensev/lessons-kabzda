import React from "react";
import {OnOff} from "./OnOff";


export default {
    title: 'OnOff stories',
    component: OnOff
}

export const OnOnOff = () => <OnOff value={true}/>

export const OffOnOff = () => <OnOff value={false}/>
