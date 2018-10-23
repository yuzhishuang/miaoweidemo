import React, {Fragment, Component, createRef} from 'react';

import NewTodo from './NewTodo'
import todo from "../components/todo";



export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [],
        }

        this.todoInput = React.createRef();

    }

    addTodo = (ev) => {
        if (ev.keyCode !== 13) return;
        let {value} = this.todoInput.current,
            {todoList} = this.state;
        this.setState({
            todoList: [{
                id: Math.random(),
                content: value,
                hasCompleted: false,
            },
                ...todoList
            ]
        }, () => {
            this.todoInput.current.value = '';
        })

    }

    deleteTodo = (ev) => {
        let {todoList} = this.state;
        todoList = todoList.filter((item) => {
            return !(item.id === ev);
        })
        this.setState({
            todoList
        })
    }

    toggleTodo = (ev) => {
        let {todoList} = this.state;
        todoList = todoList.map((item) => {
            if (item.id === ev) {
                item.hasCompleted = !item.hasCompleted;
            }
            return item;
        })
        this.setState({
            todoList
        })
    }

    toggleAll = (ev) => {
        let {todoList} = this.state;
        todoList = todoList.map((item) => {
            item.hasCompleted = ev.target.checked;
            return item;
        })
        this.setState({
            todoList
        })
    }

    render() {

        let {todoList} = this.state;

        let todos = todoList.map((elt) => {
            return (
                <NewTodo
                    {...{
                        key: elt.id,
                        id: elt.id,
                        content: elt.content,
                        deleteTodo: this.deleteTodo,
                        toggleTodo: this.toggleTodo,
                        hasCompleted: elt.hasCompleted,
                    }}
                />
            )
        })

        let activeTodo = todoList.find(ev=>ev.hasCompleted === false);

        return (
            <div>
                <header>
                    <h1 style={{
                        color: "red",
                        textAlign: "center",
                        fontSize: "50px",
                    }}>todos</h1>
                    <input
                        type="text"
                        onKeyDown={this.addTodo}
                        ref={this.todoInput}
                    />
                </header>
                <Fragment>
                    <section>
                        {/*全选按钮*/}
                        {
                            todoList.length > 0 ? (
                                <input
                                    type="checkbox"
                                    checked={!activeTodo}
                                    onChange={this.toggleAll}
                                />
                            ) : null
                        }
                        <ul>
                            {todos}
                        </ul>
                    </section>
                </Fragment>
            </div>
        )
    }

}
