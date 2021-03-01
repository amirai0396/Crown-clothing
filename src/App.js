import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import Header from './component/header/header.component';

import Homepage from './pages/homepage/homepage.component';
import SignInAndSignUp from './component/sign-in & sign-up/sign-in-and-sign-up.component';
import { auth } from './component/firebase/firebase.utils';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  // for the authentication of google signin
  unsubscribeFromAuth = null;
  // UNSAFE_componentWillMount is the new name for componentillMount
  UNSAFE_componentWillMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  //we will pass the userState in header so that the header may know someone is logged In
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />

        <Switch>
          ̥<Route exact path='/' component={Homepage} />
          ̥<Route path='/shop' component={ShopPage} />
          ̥<Route path='/Signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
