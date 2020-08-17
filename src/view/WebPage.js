import React from 'react';
import { Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import '../assets/sass/webpage.css';
import Slider from './Slider';
import mobile1 from '../img/mobile1.jfif';
import mobile2 from '../img/mobile2.jfif';
import banner from '../img/banner.jfif';
import { Carousel } from 'antd';
class WebPage extends React.Component {
    
  
    render() {
        return (
            <div>
                <div className="header">
                    <div className="company-name">
                        accep<span>tus</span>
                    </div>
                    <div className="search">
                        {/* <input type="search"/> */}
                        <input type="text" placeholder="Search.." name="search" />
                        {/* <button type="submit"><i class="fa fa-search"></i></button> */}
                    </div>

                    <div className="cart">
                        <span>$0.00</span>-0item(s)
                    </div>
                </div>
                <div className="nav-bar">
                    <Nav>
                        <NavLink href="#">About us</NavLink>
                        <NavLink href="#">News</NavLink>
                        <NavLink href="#">Blogs</NavLink>
                        <NavLink href="#">Portfolio</NavLink>
                        <NavLink href="#">FAQ</NavLink>
                        <NavLink href="#">Contacts</NavLink>
                    </Nav>
                </div>
                <Slider />

                <Container >

                    <div className="main">

                        

                        <div className="row-wrapper">
                            <Row>
                                {/* <Col sm="1">

                            </Col> */}
                                <Col sm="6">
                                    <div className="sale">
                                        <div className="from-text">
                                            FROM JUNE 20th TO JULY 20th
                                    </div>
                                        <div className="big-sale">
                                            BIG SALE
                                    </div>
                                        <div className="sale-text">
                                            <p>30-50%</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div className="smile">
                                        <div className="keep-smile">
                                            KEEP SMILING
                                    </div>
                                        <div className="s-1000">
                                            FROM S1000
                                    </div>
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div className="voucher">
                                        <div className="enter-voucher">
                                            ENTER YOUR VOUCHER
                                    </div>
                                        <div className="tablets">
                                            TABLETS
                                    </div>
                                        <div className="give-away">
                                            GIVE AWAY
                                    </div>
                                    </div>
                                </Col>
                                {/* <Col sm="1">
                                
                            </Col> */}
                            </Row>
                        </div>
                        <div className="smart-phones">
                            Smart Phones
                        <hr></hr>
                        </div>
                        <div className="middle-row">
                            <Row>

                                <Col sm="3">
                                    <div className="mobiles">
                                        <div className="img">
                                            <img alt='logo' src={mobile1} />
                                        </div>
                                        <div className="brand">
                                            Brand: Xcell
                                    </div>
                                        <div className="price">
                                            <p>Rs21,000 PKR*</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div className="mobiles">
                                        <div className="img">
                                            <img alt='logo' src={mobile1} />
                                        </div>
                                        <div className="brand">
                                            Brand: Xcell
                                    </div>
                                        <div className="price">
                                            <p>Rs21,000 PKR*</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div className="mobiles">
                                        <div className="img">
                                            <img alt='logo' src={mobile1} />
                                        </div>
                                        <div className="brand">
                                            Brand: Xcell
                                    </div>
                                        <div className="price">
                                            <p>Rs21,000 PKR*</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div className="mobiles">
                                        <div className="img">
                                            <img alt='logo' src={mobile1} />
                                        </div>
                                        <div className="brand">
                                            Brand: Xcell
                                    </div>
                                        <div className="price">
                                            <p>Rs21,000 PKR*</p>
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
                                            <img alt='logo' src={mobile1} />
                                        </div>
                                        <div className="brand">
                                            Brand: Xcell
                                    </div>
                                        <div className="price">
                                            <p>Rs21,000 PKR*</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div className="mobiles">
                                        <div className="img">
                                            <img alt='logo' src={mobile1} />
                                        </div>
                                        <div className="brand">
                                            Brand: Xcell
                                    </div>
                                        <div className="price">
                                            <p>Rs21,000 PKR*</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div className="mobiles">
                                        <div className="img">
                                            <img alt='logo' src={mobile1} />
                                        </div>
                                        <div className="brand">
                                            Brand: Xcell
                                    </div>
                                        <div className="price">
                                            <p>Rs21,000 PKR*</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div className="mobiles">
                                        <div className="img">
                                            <img alt='logo' src={mobile1} />
                                        </div>
                                        <div className="brand">
                                            Brand: Xcell
                                    </div>
                                        <div className="price">
                                            <p>Rs21,000 PKR*</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default WebPage;