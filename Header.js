import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from "@mui/icons-material/Search"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import { useStateValue } from './StateProvider'
import { auth } from './firebase';

function Header() {
    const [{ basket ,user}] = useStateValue();
    console.log(basket);
 
    const login=()=>{
        if(user){
            auth.signOut();
        }
    };
    return (
        <nav className="header">
            <Link to="/">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrnzE9n-ZSe7roIwpvtyG2KH-lLfrP8GtilODUD764BftJDCrI2rZJNDlO7v5eoAbKsrc&usqp=CAU"
                    className="header__logo"
                    alt="Logo" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__seachIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'} className="header__link">
                    <div className="header__option">
                        <span onClick={login} className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign out':'Sign in'}</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBaskets">
                        <ShoppingBasketIcon /> 
                        <span className="header__optionTwo  header__basketCount">
                            {basket ?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header