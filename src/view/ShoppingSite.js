import React from 'react';
import { Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import '../assets/shopping.css';
import tshirt from '../img/tshirt.jfif';
import jeans from '../img/jeans.jfif';
import model from '../img/model.png';
import hood from '../img/hood.jpg';
import { Carousel } from 'antd';
import ShoppingSlider from './ShoppingSlider';
const ShoppingSite = (props) => {

    // render() {
    return (
        <div className="main-div">
            <div className="upper-header"> 
                <form >
                    <label className="label" htmlFor="currency">Currencies:</label>
                    <select name="currency" className="currency">
                        <option value="pound">Pound</option>
                        <option value="dollar">Dollar</option>
                        <option value="rupee">PKR</option>
                        <option value="riyal">Riyal</option>
                    </select>
                </form>
            </div>
                 <hr className="hr"></hr>
                <div className="header"> 
                    <div className="left">
                        <span className="G">G</span><span className="gstar">G-STAR RAW</span>
                    </div>
                    <div className="right">
                        <div className="login">
                            Login or Register
                        </div>
                        <div className="addcart">
                            shopping cart 0 items
                        </div>
                    </div>
                    <hr></hr>
                </div>
            <div className="nav-bar">
                <Nav className="left-nav">
                    <NavLink href="#">About us</NavLink>
                    <NavLink href="#">News</NavLink>
                    <NavLink href="#">Blogs</NavLink>
                    <NavLink href="#">Portfolio</NavLink>
                    <NavLink href="#">FAQ</NavLink>
                    <NavLink href="#">Contacts</NavLink>

                    <div className="">
                        <input className="searchbox" type="text" placeholder="Search.." name="search" />
                    </div>
                </Nav>
            </div>
            <Container fluid>
                <div className="parent" >
                    <Row>
                        <Col sm='2' md= '3'>
                            <div className="left-panel">
                                <h3>Catagories</h3>
                                <div className="product">
                                    <div className="pro-type">G Start Raw Jeans</div>
                                    <hr></hr>
                                    <div className="pro-type">G Start Raw Shirts</div>
                                    <hr></hr>
                                    <div className="pro-type">G Start Raw Jackets</div>
                                    <hr></hr>
                                    <div className="pro-type">G Start Raw Hood</div>
                                    <hr></hr>
                                    <div className="pro-type">G Start Raw T-Shirts</div>
                                    <hr></hr>
                                    <div className="pro-type">G Start Raw Knits</div>
                                    <hr></hr>
                                </div>
                               <div className="special">
                                    <div>Specials</div>
                                    <div>New Products</div>
                                    <div>All Products</div>
                               </div>
                               
                                <div>
                                    <div className="new-pro">New Products [More]</div>
                                    <div className="new-pro-img">
                                        <img alt='logo' src={tshirt} />
                                    </div>
                                        G-Star Men's T-Shirt (white)
                                        <div className="brand">
                                            Brand: Denim
                                        </div>
                                        <div className="price">
                                            <p>Rs1,000 PKR*</p>
                                        </div>
                                </div>
                                <div>
                                    <div className="new-pro">New Products [More]</div>
                                    <div className="new-pro-img">
                                        <img alt='logo' src={jeans} />
                                    </div>
                                        G-Star Men's jeans (black)
                                        <div className="brand">
                                            Brand: Denim
                                        </div>
                                        <div className="price">
                                            <p>Rs2,000 PKR*</p>
                                        </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm='10' md='9'>
                            <ShoppingSlider />
                            <div className="main">
                                <div className="smart-phones">
                                    Featured Products
                                        <hr></hr>
                                </div>
                                <div className="middle-row">
                                    <Row>

                                        <Col sm="3">
                                            <div className="mobiles">
                                                <div className="img">
                                                    <img alt='logo' src={tshirt} />
                                                </div>
                                                <div className="brand">
                                                    Brand: Denim
                                                    </div>
                                                <div className="price">
                                                    <p>Rs1,000 PKR*</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm="3">
                                            <div className="mobiles">
                                                <div className="img">
                                                    <img alt='logo' src={jeans} />
                                                </div>
                                                <div className="brand">
                                                    Brand: Levis
                                                    </div>
                                                <div className="price">
                                                    <p>Rs2,000 PKR*</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm="3">
                                            <div className="mobiles">
                                                <div className="img">
                                                    <img alt='logo' src={tshirt} />
                                                </div>
                                                <div className="brand">
                                                    Brand: Denim
                                                    </div>
                                                <div className="price">
                                                    <p>Rs2,000 PKR*</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm="3">
                                            <div className="mobiles">
                                                <div className="img">
                                                    <img alt='logo' src={jeans} />
                                                </div>
                                                <div className="brand">
                                                    Brand: Cougher
                                                    </div>
                                                <div className="price">
                                                    <p>Rs2,000 PKR*</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="smart-phones">
                                    Best Sellers
                                        <hr></hr>
                                </div>
                                <div className="middle-row">
                                    <Row>

                                        <Col sm="3">
                                            <div className="mobiles">
                                                <div className="img">
                                                    <img alt='logo' src={tshirt} />
                                                </div>
                                                <div className="brand">
                                                    Brand: Denim
                                                    </div>
                                                <div className="price">
                                                    <p>Rs1,000 PKR*</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm="3">
                                            <div className="mobiles">
                                                <div className="img">
                                                    <img alt='logo' src={jeans} />
                                                </div>
                                                <div className="brand">
                                                    Brand: Cougher
                                                    </div>
                                                <div className="price">
                                                    <p>Rs1,000 PKR*</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm="3">
                                            <div className="mobiles">
                                                <div className="img">
                                                    <img alt='logo' src={tshirt} />
                                                </div>
                                                <div className="brand">
                                                    Brand: Denim
                                                     </div>
                                                <div className="price">
                                                    <p>Rs1,000 PKR*</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm="3">
                                            <div className="mobiles">
                                                <div className="img">
                                                    <img alt='logo' src={jeans} />
                                                </div>
                                                <div className="brand">
                                                    Brand: Denim
                                                    </div>
                                                <div className="price">
                                                    <p>Rs2,000 PKR*</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
   
        </div>
    )
    // }
}

export default ShoppingSite;