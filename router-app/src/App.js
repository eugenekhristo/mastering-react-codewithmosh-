import React, { Component } from 'react';
import NavBar from './components/navbar';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Products} />
          <Route path="/posts/:year?/:month?" render={props => <Posts justProp={'Hello World! 😍'} {...props} />} />
          <Route path="/admin" component={Dashboard} />
          <Redirect from="/messages" to="/products" />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
