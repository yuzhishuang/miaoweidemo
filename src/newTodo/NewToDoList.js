import React, {Fragment, Component, createRef} from 'react';

import NewTodo from './NewTodo'



export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [],
        }

    }

    addTodo = (ev) => {
        console.log(ev.keyCode);
    }

    render() {

        let {todoList} = this.state;

        let todos = todoList.map((elt) => {
            return (
                <NewTodo />
            )
        })

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
                    />
                </header>
                <Fragment>
                    <section>
                        {/*全选按钮*/}
                        <input type="checkbox"/>
                        <ul>

                        </ul>
                    </section>
                </Fragment>
            </div>
        )
    }

}
