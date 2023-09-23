import React from 'react';
import Header from './components/Header';
import Image from './components/Image';

import './css/main.css';

import logo from './img/logo.jpg';



// ReactDOM.render(React.createElement('input'), {
// 	placeholder: 'Help text',
// 	onClick: () => console.log('Clicked'),
// 	onMouseEnter: () => console.log('Mouse over'),
// }), document.getElementById('app'))


// функциональная компонента
// const App = () => {
// 	return (<div className='name'>
// 	<Header />
// 	<h1>{helpText}</h1>
// 	<input placeholder={helpText} 
// 			onClick={inputClick}
// 			onMouseEnter={mouseOver}/>
// 	<p>{helpText === 'Help text!' ? 'Yes' : 'No'}</p>
// </div>)
// }

class App extends React.Component {
	helpText = 'Help text';
	render () {
		return (<div className='name'>
			<Header title='Шапка сайта' />
			<h1>{this.helpText}</h1>
			<input placeholder={this.helpText} 
					onClick={this.inputClick}
					onMouseEnter={this.mouseOver}/>
			<p>{this.helpText === 'Help text!' ? 'Yes' : 'No'}</p>
			<Image image={logo}/>
			{/* <img src={logo} /> */}
		</div>
		)
	}

	inputClick() {console.log('Clicked')};
	mouseOver() {console.log('Mouse over')};
}

export default App;