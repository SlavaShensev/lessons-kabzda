import React from "react";

type RatingPropsType = {
    value: 1 | 2 | 3 | 4 | 5
}

function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
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

export default Rating;