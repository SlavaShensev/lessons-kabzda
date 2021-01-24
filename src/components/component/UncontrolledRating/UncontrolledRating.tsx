import React, {useState} from "react";
import '../../../App.css';

type StartPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setOn: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StartPropsType) {
    return <span onClick={() => {
        props.setOn(props.value)
    }}>
        {props.selected ? <b className={'star'}> Start </b> : ' Start '}
    </span>
}

function UncontrolledRating() {
    let [on, setOn] = useState(0)
    return (
        <div>
            <Star selected={on > 0}
                  setOn={setOn}
                  value={1}/>
            <Star selected={on > 1}
                  setOn={setOn} value={2}/>
            <Star selected={on > 2}
                  setOn={setOn}
                  value={3}/>
            <Star selected={on > 3}
                  setOn={setOn} value={4}/>
            <Star selected={on > 4}
                  setOn={setOn}
                  value={5}/>
        </div>
    )
}

export default UncontrolledRating;