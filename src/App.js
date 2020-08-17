import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Counter from './view/Counter';
import store from './view/store';
import bookStore from './view/bookStore';
import BookCounter from './view/redux/bookshop/BookCounter';
import CakeContainer from './view/CakeContainer';
import IceCreamContainer from './view/IceCreamContainer';
import Mainstore from './view/redux/Mainstore';
import sagastore from './view/redux/Mainstore';
import ThunkContainer from './view/ThunkContainer';
import './assets/sass/Home.css';
import Practice from './view/Practice';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TimeOfDay from './view/TimeOfDay';
import HouseList from './view/HouseList';
import AppDesign from './view/AppDesign';
import PageDesign from './view/PageDesign';
import WebPage from './view/WebPage';
import SagaApp from './view/redux/reduxSaga/SagaApp';
import ShoppingSite from './view/ShoppingSite';
// import Counter from './view/Counter';

class App extends React.Component {
  render() {
    function Home() {
      return <h2>Home</h2>;
    }

    // function About() {
    //   return <h2>About</h2>;
    // }

    // function Users() {
    //   return <h2>Users</h2>;
    // }
    return (
      // <div className="App">
      //   <Practice name="hussain" password={123} />
      // </div>
      <Router>
        <div >
          <nav >
            <ul className="nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/practice">States and Props Practice</Link>
              </li>
              {/* <li>
                <Link to="/time">Time Of Day</Link>
              </li> */}
              <li>
                <Link to="/page-design">Page Design</Link>
              </li>
              <li>
                <Link to="/app-design">Zong App Front Page</Link>
              </li>
              <li>
                <Link to="/page-design2">Page Design with Reactstrap</Link>
              </li>
              <li>
                <Link to="/web-page">Web Page Design</Link>
              </li>
              <li>
                <Link to="/shopping-site">shopping site</Link>
              </li>
              {/* <li>
                <Link to="/Counter-Redux">Counter-Redux</Link>
              </li> */}
              <li>
                <Link to="/book-Redux">Book Store-Redux</Link>
              </li>
              {/* <li>
                <Link to="/cake-Redux">cake & icecream-Redux</Link>
              </li> */}
              <li>
                <Link to="/thunk-Redux">Redux Thunk</Link>
              </li>
              <li>
                <Link to="/redux-saga">Redux Saga</Link>
              </li>
              {/* <li>
                <Link to="/redux-practice">Redux Practice</Link>
              </li>             */}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/practice">
              <Practice name="hussain" password={123} />
            </Route>
            {/* <Route path="/time">
              <TimeOfDay />
            </Route> */}
            <Route path="/page-design">
              <HouseList />
            </Route>
            <Route path="/page-design2">
              <PageDesign />
            </Route>
            <Route path="/app-design">
              <AppDesign />
            </Route>
            <Route path="/web-page">
              <WebPage />
            </Route>
            <Route path="/shopping-site">
              <ShoppingSite />
            </Route>
            {/* <Route path="/Counter-Redux">
              <Provider store={store}>
                <Counter />
              </Provider>
            </Route> */}
            <Route path="/book-Redux">
              <Provider store={bookStore}>
                <BookCounter />
              </Provider>
            </Route>
            {/* <Route path="/cake-Redux">
              <Provider store={Mainstore}>
                <CakeContainer />
                <IceCreamContainer />
              </Provider>
            </Route> */}
            <Route path="/thunk-Redux">
              <Provider store={Mainstore}>
                <ThunkContainer />
              </Provider>
            </Route>
            <Route path="/redux-saga">
              <Provider store={sagastore}>
                <SagaApp />
              </Provider>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
