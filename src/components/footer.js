import React from 'react';

export default function(props) {
	let {
		clearCompleted,
		showClearButton,
		view,
        changeView,
        leftItem
	} = props;
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{leftItem}</strong>
				<span>item left</span>
			</span>
			<ul className="filters">
				<li>
					<a
						className={view==='all'? "selected" : ''}
						onClick={()=>{changeView('all')}}
					>All</a>
				</li>
				<li>
					<a
						className={view==='active' ? "selected" : ''}
                        onClick={()=>{changeView('active')}}
					>Active</a>
				</li>
				<li>
					<a
						className={view==='completed' ? "selected" : ''}
                        onClick={()=>{changeView('completed')}}
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