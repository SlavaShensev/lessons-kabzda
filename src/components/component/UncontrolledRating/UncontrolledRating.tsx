import React, {useState} from "react";

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

type StartPropsType = {
    selected: boolean
}

function Star(props: StartPropsType) {
    if (props.selected === true) {
        return <span><b>Start </b></span>
    } else {
        return <span>Start </span>
    }
}

export default UncontrolledRating;