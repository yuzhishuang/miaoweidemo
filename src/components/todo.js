import React, {Component} from 'react';

export default class extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let {id, content, deleteTodo} = this.props;
		return (
			<li>
				<div className="view">
					{/*勾选按钮*/}
					<input type="checkbox" className="toggle" />
					{/*todo的内容*/}
					<label ref="label">{content}</label>
					{/*删除按钮*/}
					<button onClick={() =>deleteTodo(id)} className="destroy" ref="btn">删除</button>
				</div>
				{/*编辑todo的输入框*/}
				<input type="text" className="edit" />
			</li>
		)
	}
}