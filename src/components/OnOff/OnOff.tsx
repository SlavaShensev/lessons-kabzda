import React from "react";

// const [on, setOn]  = useState(false)

export function OnOff(value: boolean) {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: value ? 'green' : 'white',
        cursor: 'pointer',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '2px',
        backgroundColor: value ? 'white' : 'red',
        cursor: 'pointer',
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: value ? 'green' : 'red',
        cursor: 'pointer',
    }

    return <div>

        <div style={onStyle}> On
        </div>
        <div style={offStyle}> Off
        </div>
        <div style={indicatorStyle}></div>
    </div>
}