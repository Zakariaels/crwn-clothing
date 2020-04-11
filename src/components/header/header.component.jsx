import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.compoent';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header = ( { currentUser, hidden } ) => (
    <div className = 'header'>
        <Link className = 'logo-container' to = "/">
            <Logo className = 'logo' />
        </Link>
        <div className = 'options'>
            <Link className = 'option' to='/shop'>
                SHOP
            </Link>
            <Link className = 'option' to='/shop'>
                CONTACT
            </Link>
            {  
                currentUser 
                ? 
                (<div className = 'option' onClick = { () => auth.signOut() } > SIGN OUT </div>)
                :
                (<Link className = 'option' to='/signin' > SIGN IN </Link> )
            }
            <CartIcon />
        </div>

        {
            !hidden ? (<CartDropDown />) : null
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

//connect: connecte the Header component to the store
//we get the prop we need, which in this case, the currentUser, using mapStateToProps function we've created

//The first argumet passed in to 'connect', mapStateToProps is used for selectiong the part of the data
//from the store that the connected component needs. 
export default connect(mapStateToProps)(Header);