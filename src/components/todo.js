import React, {Component} from 'react';

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
		}, ()=>{
			input.focus();
			input.value = this.props.content;
		})
	}
	
	commitAlter = () => {
		let {current: input} = this.editInput;
		let content = input.value.trim();
		content = content.trim();
		let {id} = this.props
		if (content) {
			this.props.alterTodoContent(id, content)
		} else {
			this.props.deleteTodo(id);
		}
		input.value = '';
		
	}
	
	onBlur = () => {
		if (!this.state.inEdit) return;
		this.setState({
			inEdit: false
		})
		this.commitAlter();
	}
	
	onKeyDown = (ev) => {
		console.log(ev.keyCode);
		if (ev.keyCode === 27 || ev.keyCode === 13) {
			this.setState({
				inEdit: false
			})
		}
		if (ev.keyCode === 13) {
			this.commitAlter();
		}
		
		
	} 
	
	render() {
		let {id, content, deleteTodo, hasCompleted, toggleTodo} = this.props;
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
						className="toggle"
						checked={hasCompleted}
						onChange={()=>toggleTodo(id)}
					/>
					{/*todo的内容*/}
					<label
						className={className}
						ref="label"
						onDoubleClick={this.onEdit}
					>{content}</label>
					{/*删除按钮*/}
					<button onClick={() =>deleteTodo(id)} className="destroy" ref="btn">删除</button>
				</div>
				{/*编辑todo的输入框*/}
				<input 
					type="text" 
					className="edit"
					ref={this.editInput}
					onBlur={this.onBlur}
					onKeyDown={this.onKeyDown}
				/>
			</li>
		)
	}
}