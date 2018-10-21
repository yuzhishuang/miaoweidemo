import React from 'react';

export default function(props) {
	let {
		clearCompleted,
		showClearButton,
		view 
	} = props;
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>8</strong>
				<span>item left</span>
			</span>
			<ul className="filters">
				<li>
					<a
						className={view==='all'? "selected" : ''}
					>All</a>
				</li>
				<li>
					<a
						className={view==='active' ? "selected" : ''}
					>Active</a>
				</li>
				<li>
					<a
						className={view==='completed' ? "selected" : ''}
					>Completed</a>
				</li>
			</ul>
			{/*清除完成按钮*/}
				{showClearButton && (
					<button
						className="clear-completed"
						onClick={clearCompleted}
					>
						clear all completed
					</button>
				)}
		</footer>
	)
}