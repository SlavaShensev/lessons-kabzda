import React, {useState} from "react";

type StartPropsType = {
    selected: boolean
}

function Star(props: StartPropsType) {
    return <span>
        {props.selected ? <b>Start </b> : 'Start '}
    </span>
}

function UncontrolledRating() {
    let [on, setOn] = useState(0)
    return (
        <div>
            <Star selected={on > 0}/>
            <button onClick={() => {
                setOn(on = 1)
            }}>1
            </button>
            <Star selected={on > 1}/>
            <button onClick={() => {
                setOn(on = 2)
            }}>2
            </button>
            <Star selected={on > 2}/>
            <button onClick={() => {
                setOn(on = 3)
            }}>3
            </button>
            <Star selected={on > 3}/>
            <button onClick={() => {
                setOn(on = 4)
            }}>4
            </button>
            <Star selected={on > 4}/>
            <button onClick={() => {
                setOn(on = 5)
            }}>5
            </button>
        </div>
    )
}

export default UncontrolledRating;