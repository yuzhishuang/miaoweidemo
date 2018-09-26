import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import People from './components/People';
import Man from './components/Man';

import './main.css'

//  把你写的结构通过js渲染到界面上

//  JSX，本质上也是js代码

//  type: div
//  children:
//    你好，React!--来自CAO杨
//    obj:

//  jsx其实就是写结构的语法糖而已
//  它会被babel这个工具转变成JavaScript代码，这份js代码运行之后，会得到一个对象
//  这个对象其实就是virtual DOM 虚拟dom

//  jsx使用
//  1、jsx中使用表达式
//  2、jsx中的嵌套
//  3、jsx中的闭合
//  4、样式
//  5、属性
	//  相连的属性要变成
	//  关键字属性需要变成另外一种方式，并且是驼峰式的

let s1 = 'Hello',
	s2 = 'World';

function sum(a, b) {
	return a +b;
}

let jsx1 = (
    <div>
        <p>我是jsx1</p>
    </div>
	);

let jsx2 = (
    <div>
        <p>我是jsx2</p>
    </div>
);

//  Fragment即是闭合的标签又不会再页面中渲染内容
let jsx3 = (
    <Fragment>
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</Fragment>
);

console.log(
	<div>
		你好，React!--来自CAO杨
		<p>加油</p>
		<h1>你好</h1>
	</div>
);

let h4Style = {color: 'green'};

//  1、组件的表现形式
//    函数组件
//    类组件
//  2、使用组件
//    标签名大写开头
//    变量在作用域内

// function People () {
// 	return (
// 		<div className="people">
// 			<h2>我是 people</h2>
// 			<p>你好 people</p>
// 		</div>
// 	);
// }
//
// class Man extends React.Component {
// 	render() {
//         return (
//             <div className="man">
//                 <h2>我是 Man</h2>
//                 <p>你好 Man</p>
// 				<People/>
//             </div>
//         );
// 	}
// }

//  类组件 VS 函数式组件
//  接收props的不同
//  类组件有实例，函数组件没有实例

//  写了属性不写值，默认是true
//  在自定义属性里面可以直接写一些属性，然后接上一些值
//  在函数组件里面，通过第一个参数来接收props
//  在类组件里面，通过类的实例下面的props：this.props
//  数据总是从顶层流向底层：单向数据流

//  children
//  标签之间的内容就是props.children，

//  defaultProps,默认参数

//  prop-types 数据验证
//  array
//  bool
//  number
//  object
//  string.isRequired
//  symbol
//  func

//  node
//  	可以用于渲染的东西：element, string,number,array
//  element
//  	React element

//  类组件才有内部状态 state
//  setState
//    更新this.state的值
//    render方法再一次执行,生成新的virtual DOM结构
//    比较新旧virtualDOM的结构，对变化的部分，在页面进行更新

//  state的其他特性
//    什么是内部状态
//    合并更新
//    异步更新
//    语法
//      不止可以传入一个对象还可以传入一个回调函数

class MagicNumber extends React.Component {
	constructor(props) {
		super();
		this.state = {
			number: Math.random(),
			name: props.name,
		}
	}
	
	render() {
		let {number, name} = this.state;
		return(
			<div>
				<h2>{name}</h2>
				<p>{number}!!!</p>
				<button onClick={()=>{
					this.setState({
						number: 11
					})
					this.setState((prevState, props) => {
						return {
							name: "Mike",
							number: prevState.number == 11 ? 666 : 888,
						}
					})
				}}>change number</button>
			</div>
		)
	}
}

ReactDOM.render(
	<div className="test" id="demo">
		<People name="Lily" renderProps={['aaa', 'bbb', 'ccc', <span key={12}>下班了</span>]}></People>
		你好，React!--来自CAO杨
        <h5>{`${s1} ${s2}`}</h5>
		<h4 style={h4Style}>{sum(1, 4)}</h4>
		<p
			style={{
				color: 'red',
				marginLeft: '10px',
				backgroundColor: 'black',
			}}
		>{1 > 0 ? '正确' : '错误'}</p>
		{jsx1}
		{jsx2}
		<div />
		<ul>{jsx3}</ul>
		<People
			name="Joe"
			age={20}
			isSelf={true}
		>
			123
		</People>

		<Man hand={300} peopleName="Floke">
			<div>yzschildren</div>
		</Man>
		<MagicNumber name="m1"></MagicNumber>
		<MagicNumber name="m2"></MagicNumber>
		<MagicNumber name="m3"></MagicNumber>
		<MagicNumber name="m4"></MagicNumber>
	</div>,
	document.getElementById('root')
)
