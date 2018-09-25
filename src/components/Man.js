import React from "react";
import People from './People';

export default class Man extends React.Component {
    render() {

        let {eyes, hand, peopleName, children} = this.props;

        return (
            <div className="man">
                <h2>我是 Man，我有{eyes}只眼睛</h2>
                <p>你好 Man，我有{hand}只手</p>
                <People name={peopleName}/>
                {children}
            </div>
        );
    }
}

Man.defaultProps = {
    eyes: 10000,
}