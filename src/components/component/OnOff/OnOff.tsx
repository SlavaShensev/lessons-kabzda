import React, {useState} from "react";

type PropsType = {
    on?: boolean
}

function OnOff(props: PropsType) {
    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white',
        cursor: 'pointer',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red',
        cursor: 'pointer',
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red',
        cursor: 'pointer',
    }

    return <div>
        <div style={onStyle} onClick={() => {
           setOn(true)
            console.log(on)
        }}>On
        </div>
        <div style={offStyle} onClick={() => {
            setOn(false)
            console.log(on)
        }}>Off
        </div>
        <div style={indicatorStyle}></div>
    </div>
}

export default OnOff