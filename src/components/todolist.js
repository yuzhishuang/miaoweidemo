import React, {Fragment, Component, createRef} from 'react';
import ReactDOM from 'react-dom';
import Todo from './todo';
import Footer from './footer';

import '../main.css';

export default class extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			todoList: []
		};
		
		this.todoInput = createRef();
		
	}
	
	addTodo = (ev) => {
		
		let {value} = this.todoInput.current;
		
		if(ev.keyCode != 13 || !value.trim()) return;
		
		let {todoList} = this.state;
		
		this.setState({
			todoList: [
			{
				id: Math.random(),
				content: value
			},
				...todoList
			]
		}, () => {
			this.todoInput.current.value = '';
		})
	}
	
	deleteTodo = (id) => {
		console.log(id);
		let {todoList} = this.state;
		
		todoList = todoList.filter(elt => {
			return elt.id!==id;
		});
		console.log(todoList);
		this.setState({
			todoList
		})
	}
	
	render() {
		let {todoList} = this.state;
		let todos = todoList.map((elt) =>{
			return (
				<Todo key={elt.id}
					{...{
						id: elt.id,
						content: elt.content,
						deleteTodo: this.deleteTodo
					}}
					
				/>
			)
		})
		return(
			<div>
				<header className="header">
					<h1>todos</h1>
					{/*输入框*/}
					<input 
						type="text" 
						className="new-todo" 
						placeholder="type something here"
						ref={this.todoInput}
						onKeyDown={this.addTodo}
					/>
				</header>
				<section className="main">
					{/*全选按钮*/}
					<input type="checkbox" className="toggle-all" />
					<ul className="todo-list">
						{todos}
					</ul>
				</section>
			</div>
		);
	}
}