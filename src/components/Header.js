import React from 'react';

// функциональная компонента
// const Header = () => {
// 	return (
// 		<header>Шапка сайта</header>
// 	)
// }

class Header extends React.Component {
	render() {
		return (
			<header className='header'>{this.props.title}</header>
		)
	}
}

export default Header;