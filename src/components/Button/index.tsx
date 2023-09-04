import React from "react";

class Button extends React.Component {
    render() {
        const backgroundColor = 'green';
        const isActivated = true;

        const styles = {
            backgroundColor,
            color: isActivated ? 'blue' : 'red'
        };

        return (
            <button style={styles}>
                Botão
            </button>
        )
    }
}

export default Button;