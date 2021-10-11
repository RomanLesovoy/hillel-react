import React, {useEffect, useState} from 'react';

const WelcomeF = (props) => {
    const [stateOption, setStateOption] = useState('state 1');
    const [stateInput, setStateInput] = useState('');

    useEffect(() => { // вместо componentDidMount && componentDidUpdate && componentWillUnmount
        setTimeout(() => {
            setStateOption('state 2');
        }, 3000);

        return () => {
            // Когда компонент удаляется
        }
    }, []);

    // deps [] - аналогично componentDidMount
    return (
        <div>
            <input
                type="text"
                value={stateInput}
                onChange={(e) => setStateInput(e.target.value)}
            />
            <br />
            Function Welcome: { props.text }
            Function State: { stateOption }
        </div>
    )
}

export default WelcomeF;