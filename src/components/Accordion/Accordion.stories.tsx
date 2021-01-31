import React from "react";
import Accordion from "./Accordion";

export default {
    title: 'Accordion stories',
    component: Accordion
}


export const AccordionFalse = () => <Accordion slogan={'Menu'} collapsed={false}/>
export const AccordionTrue = () => <Accordion slogan={'Menu'} collapsed={true}/>
