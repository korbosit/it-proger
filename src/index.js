import React from 'react';
import *as ReactDOMClient from 'react-dom/client';

// ReactDOM.render(React.createElement('input'), {
// 	placeholder: 'Help text',
// 	onClick: () => console.log('Clicked'),
// 	onMouseEnter: () => console.log('Mouse over'),
// }), document.getElementById('app'))

const helpText = 'Help text';

const inputClick = () => console.log('Clicked');
const mouseOver = () => console.log('Mouse over');

const elements = (<div className='name'>
	<h1>{helpText}</h1>
	<input placeholder={helpText} 
			onClick={inputClick}
			onMouseEnter={mouseOver}/>
	<p>{helpText === 'Help text!' ? 'Yes' : 'No'}</p>
</div>)

const app = ReactDOMClient.createRoot(document.getElementById('app'));

app.render(elements);