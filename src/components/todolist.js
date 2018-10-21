import React, {Fragment, Component, createRef} from 'react';
import ReactDOM from 'react-dom';
import Todo from './todo';
import Footer from './footer';

import '../main.css';

export default class extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			todoList: [],
			view: 'all'
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
				content: value,
				hasCompleted: false,
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
		this.setState({
			todoList
		})
	}
	
	toggleTodo = (id) => {
		let {todoList} = this.state;
		
		todoList = todoList.map(elt => {
			if (elt.id == id) {
				elt.hasCompleted = !elt.hasCompleted
			}
			return elt;
		});
		this.setState({
			todoList
		})
	}
	
	toggleAll = (ev) => {
		let {todoList} = this.state;
		
		todoList = todoList.map(elt => {
			elt.hasCompleted = ev.target.checked; 
			return elt;
		});
		this.setState({
			todoList
		})
	}
	
	alterTodoContent = (id, content) => {
		let {todoList} = this.state;
		
		todoList = todoList.map(elt => {
			if (elt.id === id) elt.content = content; 
			return elt;
		});
		this.setState({
			todoList
		})
	}
	
	clearCompleted = () => {
		let {todoList} = this.state;
		
		todoList = todoList.filter(elt => {
			return !elt.hasCompleted;
		})
		
		this.setState({
			todoList
		})
		
	}
	
	render() {
		let {todoList, view} = this.state;
		let activeTodo = todoList.find(elt=>elt.hasCompleted===false)
		
		let completedTodo = todoList.find(elt=>elt.hasCompleted)
		
		let todos = todoList.map((elt) =>{
			return (
				<Todo key={elt.id}
					{...{
						id: elt.id,
						content: elt.content,
						deleteTodo: this.deleteTodo,
						hasCompleted: elt.hasCompleted,
						toggleTodo: this.toggleTodo,
						alterTodoContent: this.alterTodoContent
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
				{todoList.length>0 && (
					<Fragment>
						<section className="main">
							{/*全选按钮*/}
							<input 
								type="checkbox" 
								className="toggle-all"
								checked={!activeTodo && todoList.length>0}
								onChange={this.toggleAll}
							/>
							<ul className="todo-list">
								{todos}
							</ul>
						</section>
						<Footer
						{...{
							clearCompleted: this.clearCompleted,
							showClearButton: completedTodo && todoList.length > 0,
							view
						}}
						></Footer>
					</Fragment>
				)}
			</div>
		);
	}
}