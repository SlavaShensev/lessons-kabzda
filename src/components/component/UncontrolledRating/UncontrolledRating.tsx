import React, {useState} from "react";
import '../../../App.css';

type StartPropsType = {
    selected: boolean
    setOn: () => void
}

function Star(props: StartPropsType) {
    return <span onClick={props.setOn}>
        {props.selected ? <b className={'star'}> Start </b> : ' Start '}
    </span>
}

function UncontrolledRating() {
    let [on, setOn] = useState(0)
    return (
        <div>
            <Star selected={on > 0}
                  setOn={() => {
                      setOn(1)
                  }}/>
            <Star selected={on > 1}
                  setOn={() => {
                      setOn(1)
                  }}/>
            <Star selected={on > 2}
                  setOn={() => {
                      setOn(3)
                  }}/>
            <Star selected={on > 3}
                  setOn={() => {
                      setOn(4)
                  }}/>
            <Star selected={on > 4}
                  setOn={() => {
                      setOn(5)
                  }}/>
        </div>
    )
}

export default UncontrolledRating;