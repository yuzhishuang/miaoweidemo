import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import People from './components/People';
import Man from './components/Man';

import TodoList from './components/todolist';

import NewToDoList from './newTodo/NewToDoList';

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

//  事件系统
//    合成事件对象
//    支持的事件
//    this指向
//      行内绑定
//      行内使用箭头函数
//      在constructor中对事件的函数绑定this
//      类属性语法

//  只有类组件才有生命周期，函数式组件没有声明周期

//  声明周期
//  Mounting装载
//    constructor  执行一次
//	  static getDerivedStateFromProps(prop, state)
//      在render之前，给你一次改变state的机会，不改变就返回null
//    render()
//    componentDidMount()  执行一次
//      获取真实的DOM元素

//  Update更新
//  父组件更新，（已挂载）子组件也会随着更新
//	static getDerivedStateFromProps(prop, state)
//  shouldComponentUpdate(nextProps, nextState)
//    用于优化性能
//    返回一个bool值
//      true:子组件进行正常的更新流程
//      false:后面的生命周期函数不会执行，视图不会更新
//  render
//  getSnapshotBeforeUpdate(prevProp, prevState)
//    它执行的时候，新的VirtualDOM已经计算出来了
//    但是这个时候浏览器DOM元素还没有更新
//  componentDidUpdate()
//    更新已经完成的时候调用
//      获取真实的DOM元素

//  Unmounting卸载
//    componentWillUnmount()
//      只执行一次

//  错误处理
//    componentDidCatch(error, info)
//      捕获子组件生命周期抛出的错误

//  获取真实的DOM
//  回调  ref={el=>this.outDIV = el}
//  createRef  ref={this.outDIV}  this.outDIV = React.createRef();
//  字符串(过时)

//  组件受控
//    组件状态的变化是否是react接管的

//  基于回调的组件交流


class MagicNumber extends React.Component {
	constructor(props) {
		super();
		this.state = {
			number: Math.random(),
			name: props.name,
            hasError: false,
            inputVal: '',
            msg: '323',
		}
		//  this.handleButtonClick = this.handleButtonClick.bind(this);
        // this.outDIV = React.createRef();
	}
	
	/* handleButtonClick(event) {
		event.stopPropagation();
		this.setState({
			number: 11
		})
		this.setState((prevState, props) => {
			return {
				name: "Mike",
				number: prevState.number === 11 ? 666 : 888,
			}
		})
	} */

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        })
	}

	static getDerivedStateFromProps(prop, state) {
		//  console.log('getDerivedStateFromProps');
		return null; 
		/* return {
			name: prop.name === state.name ? prop.name + 'OK' : prop.name + 'Fal'
		} */
	}
	
	/* componentDidMount() {
		console.log('组件装载完成');
		console.log(document.getElementById('outDIV'))
	} */
	
	handleButtonClick = (event) => {
		event.stopPropagation();
		this.setState({
			name: this.input.value
		})
		this.setState((prevState, props) => {
			return {
				// name: "Mike",
				// number: prevState.number === 11 ? 666 : 888,
				number: Math.random(),
			}
		})
	}

	handleInputChange = (event) => {
	    console.log('输入框的值' + event.target.value);
        let value = event.target.value;
        this.setState({
            inputVal: value
        })
    }

	componentDidMount() {
	    //  console.log(this.refs.outDIV);
    }

    changeMsg = () => {
		console.log('input的值', this.sunInput.value)
	    this.setState({
            msg: this.sunInput.value
        })
    }

	
	render() {
		let {number, name, hasError, inputVal, msg} = this.state;
		return(
			<div id="outDIV" ref="outDIV" onClick={(event) => {
				/* console.log(event.currentTarget);
				console.log(event.target); */
			}}>
                <NewToDoList />

				<h1>-----------------------------------</h1>
			
				<TodoList />
				
				<h1>-----------------------------------</h1>
			
                <input
                    type="text"
                    value={inputVal}
                    ref={el=>this.input=el}
                    onChange={this.handleInputChange}
                />
				<h2>{inputVal}</h2>
				<p>{number}!!!</p>
                <p>-------------------</p>
                <Receive msg={msg}></Receive>
                <p>-------------------</p>
                <Input getInput={el=>this.sunInput = el}/>
                <p>-------------------</p>
                <Send changeMsg = {this.changeMsg}></Send>
                <p>-------------------</p>
				{/*{number > 0.5 && <Sun num={number} /> }*/}
                {/*{hasError ? (<p>SUN 崩溃了</p>) : (<Sun num={number} />)}*/}
				<Sun num={number} />
				<button onClick={this.handleButtonClick}>change number</button>
			</div>
		)
	}
}

class Sun extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			num: props.num
		}
	}
	
	static getDerivedStateFromProps(prop, state) {
		return {
			num: prop.num
		}
	}

    shouldComponentUpdate(nextProps, nextState) {
		console.log(nextProps, nextState, this.state.num,nextState.num === this.state.num );
		return !(nextState.num === this.state.num);
	}

    getSnapshotBeforeUpdate(prevProp, prevState) {
		return 'kkk';
	}

    componentDidUpdate(p, s, shot) {
		console.log(shot, 'Sun 更新');
	}

	componentDidMount() {
		console.log('Sun 创建');
	}

	componentWillUnmount() {
		console.log('Sun卸载');
	}
	
	render() {
		console.log('render');
		// if (this.props.num > 0.5) throw Error('抛出异常');
		return (
			<div>{this.state.num}</div>
		)
	}
}

function Send(props) {
    return (
        <div>
            <h2>发送消息</h2>
            <button onClick={()=>{props.changeMsg()}}>发送</button>
        </div>
    )
}

function Receive(props) {
    return (
        <div>
            <h2>接收</h2>
            <p>{props.msg}</p>
        </div>
    )
}

function Input({getInput}) {
    return (
        <input type="text" ref={getInput}/>
    )
}

ReactDOM.render(
	<div className="test" id="demo">
        {/* <People name="Lily" renderProps={['aaa', 'bbb', 'ccc', <span key={12}>下班了</span>]}></People>
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
		<MagicNumber name="m3"></MagicNumber> */}
		<MagicNumber name="m4"></MagicNumber>
	</div>,
	document.getElementById('root')
)
