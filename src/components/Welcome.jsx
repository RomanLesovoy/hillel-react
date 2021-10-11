import React from 'react';

class Welcome extends React.Component {
    state = {
        stateOption: 'state 1',
        stateInput: '',
    }

    componentDidMount() {
        // Когда компонент отрендерился первый раз

        setTimeout(() => {
            this.setState({ stateOption: 'state 2' }); // Изменение стейта только через setState
        }, 3000)
    }

    componentDidUpdate(prevProps, prevState) {
        // Когда изменился или стейт или пропс
        // Как правило тут проходят сравнения для того чтоб понять что именно изменилось и далее логика по вызову чего-то
    }

    componentWillUnmount() {
        // Когда компонент удаляется
    }

    render() {
        // Обязательный метод для классового компонента
        return (
            <div>
                <input
                    type="text"
                    value={this.state.stateInput}
                    onChange={(e) => this.setState({ stateInput: e.target.value })}
                />
                <br />
                Class Welcome: { this.props.text }
                Class State: { this.state.stateOption }
            </div>
        );
    }
}

export default Welcome;