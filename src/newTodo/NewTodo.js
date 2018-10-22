import React, {Component} from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li
                className="editing"
            >
                <div className="view">
                    {/*勾选按钮*/}
                    <input type="checkbox"/>
                    {/*todo的内容*/}
                    <label>list</label>
                    {/*删除按钮*/}
                    <button>删除按钮</button>
                </div>
                {/*编辑todo的输入框*/}
                <input type="text"/>
            </li>
        );
    }

}