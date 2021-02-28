import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import Header from './component/header/header.component';

import Homepage from './pages/homepage/homepage.component';
import SignInAndSignUp from './component/sign-in & sign-up/sign-in-and-sign-up.component';
function App() {
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

export default App;
