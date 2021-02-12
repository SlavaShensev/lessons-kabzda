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
    const selectedItem = props.items.find(i => i.title === props.value)
    const toggleItem = () => setActive(!active)
    const onItemClick = (id: any) => {
        props.onChange(id)
        toggleItem()
    }
    return (
        <>
            <div className={styles.select}>
                <span className={styles.main}
                      onClick={toggleItem}>
                    {selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            key={i.id}
                            onClick={()=> {onItemClick(i.title)}}
                        >{i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    )
}