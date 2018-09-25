import React from 'react';
import PT from 'prop-types';
//  数据验证的库

export default function People (props) {
    return (
        <div className="people">
            <h2>我是 {props.name}我今年{props.age}</h2>
            <p>你好 people</p>
            {props.children}
            <p>{props.renderProps}</p>
        </div>
    );
}

People.defaultProps = {
    name: '-----',
    age: 0,
}

People.propTypes = {
    name: PT.string,
    age: PT.number.isRequired,
    renderProps: PT.node,
}