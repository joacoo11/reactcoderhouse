import React from 'react'
import logo from '../assets/logo.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={style.header}>
        <Link to='/'><img style={style.imgStyle} src={logo} alt='logo' /></Link>
        <nav style={style.navStyle}>
            <a style={style.anchors} href="/">Store</a>
            <a style={style.anchors} href="/">IPhone</a>
            <a style={style.anchors} href="/">IPad</a>
            <a style={style.anchors} href="/">MacBook</a>
        </nav>
        <CartWidget />
        
       
    </header>
  )
}

export default Header

const style = {
    header: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginBottom : '10px',
        borderBottom : '1px solid #DADCDD',
    },
    
    navStyle: {
        display:'flex',
        justifyContent: 'space-between',
    },
    
    imgStyle :{
        width: '30px',   
        height:'30px',
        marginTop :'3px', 
    },
    
    anchors :{
        margin: '10px',
        color:'#00000'
    },
}