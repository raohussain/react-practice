import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import { Provider } from 'react-redux';
import Counter from './view/Counter';
import store from './view/store';
import bookStore from './view/bookStore';
import BookCounter from './view/redux/bookshop/BookCounter';
import CakeContainer from './view/CakeContainer';
import IceCreamContainer from './view/IceCreamContainer';
import Mainstore from './view/redux/Mainstore';
import ThunkContainer from './view/ThunkContainer';

import App from './App';

class ReduxPractice extends Component {
    render() {
        return (
            <Router>
                <div >
                    <nav >
                        <ul className="nav">
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                    
                            <li>
                                <Link to="/Counter-Redux">Counter-Redux</Link>
                            </li>
                            <li>
                                <Link to="/book-Redux">Book Store-Redux</Link>
                            </li>
                            <li>
                                <Link to="/cake-Redux">cake & icecream-Redux</Link>
                            </li>
                            <li>
                                <Link to="/thunk-Redux">Redux Thunk</Link>
                            </li>
                          
              
                        </ul>
                    </nav>

                    <Switch>
                        
                        <Route path="/Counter-Redux">
                            <Provider store={store}>
                                <Counter />
                            </Provider>
                        </Route>
                        <Route path="/book-Redux">
                            <Provider store={bookStore}>
                                <BookCounter />
                            </Provider>
                        </Route>
                        <Route path="/cake-Redux">
                            <Provider store={Mainstore}>
                                <CakeContainer />
                                <IceCreamContainer />
                            </Provider>
                        </Route>
                        <Route path="/thunk-Redux">
                            <Provider store={Mainstore}>
                                <ThunkContainer />
                            </Provider>
                        </Route>
                        <Route path="/home">
                            <App />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default ReduxPractice
