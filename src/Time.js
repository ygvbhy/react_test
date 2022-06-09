import React, {Component} from 'react';

class Time extends Component {
    render() {
        return (
            <div>
                <GetClock />
            </div>
        );
    }
}

function GetClock () {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString())
    const inter = () => setTime(new Date().toLocaleTimeString())
    setInterval(inter, 1000)
    return (
        <div>
            <h1>This Time is {time}.</h1>
        </div>
    )
}

export default Time;