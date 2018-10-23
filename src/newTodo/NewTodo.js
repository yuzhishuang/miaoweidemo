import React, {Component, createRef} from 'react';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inEdit: false
        }

        this.editInput = React.createRef();

    }

    onEdit = () => {
        let input = this.editInput.current;
        this.setState({
            inEdit: true
        }, () => {
            input.focus();
            input.value = this.props.content;
        })
    }

    render() {
        let {content, deleteTodo, id, toggleTodo, hasCompleted} = this.props;
        let {inEdit} = this.state;
        let className = inEdit ? 'editing' : '';
        className = hasCompleted ? className + ' completed' : className;
        return (
            <li
                className="editing"
            >
                <div className="view">
                    {/*勾选按钮*/}
                    <input
                        type="checkbox"
                        checked={hasCompleted}
                        onChange={() => {
                            toggleTodo(id)
                        }}
                    />
                    {/*todo的内容*/}
                    <label
                        className={className}
                        onDoubleClick={this.onEdit}
                    >{content}</label>
                    {/*删除按钮*/}
                    <button
                        onClick={() => {deleteTodo(id)}}
                    >删除按钮</button>
                </div>
                {/*编辑todo的输入框*/}
                <input
                    type="text"
                    ref={this.editInput}
                />
            </li>
        );
    }

}