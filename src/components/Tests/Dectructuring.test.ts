import React from 'react';
import {render, screen} from '@testing-library/react';
import { ManType } from './Destructuring';

let props: ManType

beforeEach(() => {
    props = {
        name: 'Slava',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Nezavisimosti street',
            }
        }
    }
})

test('', () => {

})