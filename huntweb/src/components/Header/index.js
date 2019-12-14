import React, { Component } from 'react';
import './styles.css';

//jeito normal
//class Header extends Component {
//    render() {
//        return <h1>Hello word</h1>
//    }
//}

//Jeito reduzido
const Header = () => (
    <header id="main-header">JSHunt</header>
);

export default Header;