import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import Header from './component/header/header.component';

import Homepage from './pages/homepage/homepage.component';
import SignInAndSignUp from './component/sign-in & sign-up/sign-in-and-sign-up.component';
import {
  auth,
  createUserProfileDocument,
} from './component/firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './component/redux/user/user.actions';
class App extends React.Component {
  // for the authentication of google signin
  unsubscribeFromAuth = null;
  // UNSAFE_componentWillMount is the new name for componentillMount
  UNSAFE_componentWillMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  //we will pass the userState in header so that the header may know someone is logged In
  render() {
    return (
      <div>
        <Header />

        <Switch>
          ̥<Route exact path='/' component={Homepage} />
          ̥<Route path='/shop' component={ShopPage} />
          ̥<Route path='/Signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
