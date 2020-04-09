import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect  } from 'react-redux';

import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

//firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'; 

import './App.css';
// import SignIn from './components/sign-in/sign-in.component';

//App class definition
class App extends React.Component {
  unsubscribeFromAuth = null;

  //component did mount lifecycle method
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
              setCurrentUser( { 
                        id: snapShot.id,
                        ...snapShot.data()
              });
          });
      } else {
        setCurrentUser( userAuth );
      } 
    });
  };
  //component will unmout method
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render = { () => this.props.currentUser ? ( <Redirect to='/'/> ) : ( <SignInAndSignUpPage /> )}  />
      </Switch>
    </div>
  );
}}
//A store holds the whole state tree of your application. 
//The only way to change the state inside it is to dispatch an action on it.
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
export default connect(mapStateToProps, mapDispatchToProps)(App);