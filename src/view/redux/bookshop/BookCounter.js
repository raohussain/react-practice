import React, { Component } from 'react'
import { Button } from 'reactstrap'
import {Buy_BOOK,Buy_PEN} from './actions';
import { connect } from 'react-redux';

class BookCounter extends Component {

buyBook = () =>{
    this.props.dispatch({ type: Buy_BOOK });
}
buyPen = () =>{
    this.props.dispatch({ type: Buy_PEN });
}
    render() {
        return (
            <div>
                <h1>BUY BOOK {this.props.numberOfBook}</h1>
                <Button onClick={this.buyBook}>BUY BOOK</Button>
                <hr></hr>
                <h1>BUY PEN {this.props.numberOfPen}</h1>
                <Button onClick={this.buyPen}>BUY PEN</Button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        numberOfBook: state.book.numberOfBook,
      numberOfPen: state.pen.numberOfPen

    };
  }

export default connect(mapStateToProps) (BookCounter)
