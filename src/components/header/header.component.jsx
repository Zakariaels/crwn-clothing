import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.compoent';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { 
    Headercontainer, 
    LogoContainer, 
    OptionsContainer, 
    OptionLink 
} from './header.styles';

const Header = ( { currentUser, hidden } ) => (
    <Headercontainer>
        <LogoContainer to = "/">
            <Logo/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {  
                currentUser 
                ? 
                (<OptionLink as = 'div' onClick = { () => auth.signOut() } > SIGN OUT </OptionLink>)
                :
                (<OptionLink to='/signin' > SIGN IN </OptionLink> )
            }
            <CartIcon />
        </OptionsContainer>

        {
            !hidden ? (<CartDropDown />) : null
        }
    </Headercontainer>
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