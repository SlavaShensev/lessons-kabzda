import React, {useState, KeyboardEvent} from 'react';
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
    const [hoveredElement, setHoveredElement] = useState(props.value)
    const selectedItem = props.items.find(i => i.title === props.value)
    const hoveredItem = props.items.find(i => i.id === hoveredElement)
    const toggleItem = () => setActive(!active)
    const onItemClick = (id: any) => {
        props.onChange(id)
        toggleItem()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        console.log('Press')
        for (let i = 0; i < props.items.length; i++) {
            if (props.items[i].id === hoveredElement) {
                if (props.items[i + 1]) {
                    props.onChange(props.items[i + 1].id)
                    break
                }
            }
        }
    }
    return (
        <>
            <div className={styles.select}
                 tabIndex={0}
                 onKeyUp={onKeyUp}
            >
                <span className={styles.main}
                      onClick={toggleItem}>
                    {selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => setHoveredElement(i.id)}
                            className={styles.item + ' ' + (hoveredItem === i ? styles.select : '')}
                            key={i.id}
                            onClick={() => {
                                onItemClick(i.title)
                            }}
                        >{i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    )
}