import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useEffect } from 'react';
import { isUserLoggedIn } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import Products from './containers/Products/index';
import Orders from './containers/Orders';
import Category from './containers/category';
import { getInitialData } from './actions/initialData.action';

function App() {
  const auth = useSelector(state=>state.auth)
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if(!auth.authenticate){
        dispatch(isUserLoggedIn())
    }
    dispatch(getInitialData())

},[])

  return (
    <div className="App">
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/products" exact component={Products} />
          <PrivateRoute path="/category" exact component={Category} />
          <PrivateRoute path="/orders" exact component={Orders} />

          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
    </div>
  );
}

export default App;
