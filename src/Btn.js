import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Btn extends Component {
    render() {
        return (
            <div>
                <SetBtn />
            </div>
        );
    }
}

function SetBtn () {
    const [btnText, setBtnText] = React.useState('Start')
    const change = () => setBtnText('End')
    return (
        <div>
            <TestBtn text={btnText} onChange={change} fontSize={18} />
            <TestBtn text={'Show'} fontSize={15} />
        </div>
    )
}

TestBtn.propTypes = {
    text : PropTypes.string.isRequired,
    fontSize : PropTypes.number,
    onChange : PropTypes.func
};

function TestBtn ({text, fontSize, onChange}) {
    return (
        <button
        onClick={onChange}
        style={{
            backgroundColor : "tomato",
            color : "white",
            padding : '10px 20px',
            border : 0,
            borderRadius : 10,
            fontSize
        }}>{text}
        </button>
    )
}
export default Btn;