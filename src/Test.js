import React, {Component} from 'react';

class Test extends Component {
    render() {
        return (
            <div>
                <HtoM />
            </div>
        );
    }
}

function HtoM () {
    const [amount, setAmount] = React.useState(0)
    const [inter, setInter] = React.useState(false)
    const onChange = (event) => setAmount(event.target.value)
    const reset = () => setAmount(0)
    const onInter = () => {
        reset();
        setInter((current) => !current)
    }
    return (
      <div>
          <div>
              <h3>H to M</h3>
              <label htmlFor="m">M</label>
              <input type="number" id="m" onChange={onChange} disabled={inter} value={inter ? amount * 60 : amount} />
          </div>
          <div>
              <label htmlFor="h">H</label>
              <input type="number" id="h" onChange={onChange} disabled={!inter} value={inter ? amount : amount / 60} />
          </div>
          <button onClick={reset}>Reset</button>
          <button onClick={onInter}>Change</button>
      </div>
    );

}

export default Test;