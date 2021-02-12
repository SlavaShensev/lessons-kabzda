import React, {useState} from 'react';
import styles from './Select.module.css'

type ItemsType = {
    title: string
    id: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(true)

    const selectedItem = props.items.find(i => i.id === props.value)

    const toggleItem = () => setActive(!active)

    return (
        <>
            <select>
                <option value="">Rogan</option>
                <option value="">Odessa</option>
                <option value="">Kiev</option>
                <option value="">Lvov</option>
                <option value="">Moscow</option>
            </select>
            <div className={styles.select}>
                <h3 onClick={toggleItem}>{selectedItem && selectedItem.title}</h3>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div key={i.id}>{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}