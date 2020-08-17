import React, { Component } from 'react'
import '../assets/sass/style.scss';

class AppDesign extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <div className="header">
                    <div className="header-username">
                        <h1 className="header-heading">Hello,Hafiz!</h1>
                    </div>
                    <div className="header-bell">
                        <h1 className="header-heading">Hello,Hafiz!</h1>
                    </div>
                    <div className="header-options">
                        <h1 className="header-heading">Hello,Hafiz!</h1>
                    </div>
                </div>
                <div className="body-wrapper">
                    <div className="upper-body">
                        <div className="upper-left">
                            <div className="user-contact-number">
                                0322 6978701
                            </div>
                            <div className="user-balance">
                                10.44 <span className="pkr">PKR</span>
                            </div>
                            <div className="expiry-date">
                                Expires on 12th jul, 2020
                            </div>
                        </div>
                        <div className="upper-right">
                            <div >
                                <button className="recharge-btn">Recharge</button>
                            </div>
                            <div>
                                <button className="loan-btn">Loan</button>
                            </div>
                        </div>
                    </div>
                    <div className="middle-body">
                        <div className="middle-left">
                            <div className="mb-left">
                                728 <span className="mb">MB</span>
                            </div>
                            <div className="remaining">
                                remaining
                            </div>
                            <div className="progress-bar-bg">
                                <div className="progress-bar"></div>
                            </div>
                            <div className="active-offer">
                                1 offer active
                            </div>
                        </div>
                        <div className="middle-center">
                            <div className="mins-left">
                                728 <span className="mb">MINS</span>
                            </div>
                            <div className="remaining">
                                remaining
                            </div>
                            <div className="progress-bar-bg">
                                <div className="progress-bar"></div>
                            </div>
                            <div className="active-offer">
                                1 offer active
                            </div>
                        </div>
                        <div className="middle-right">
                            <div className="sms-left">
                                728 <span className="mb">SMS</span>
                            </div>
                            <div className="remaining">
                                remaining
                            </div>
                            <div className="progress-bar-bg">
                                <div className="progress-bar"></div>
                            </div>
                            <div className="active-offer">
                                1 offer active
                            </div>
                        </div>
                    </div>
                    <div className="lower-body">
                        <div className="lower-body1">
                            <div className="lower-body1-top">
                                <div className="hot-offer">
                                    Hot Offers
                            </div>
                                <div className="view-all">
                                    View All Offers
                            </div>
                            </div>
                            <div className="lower-body1-center">
                                <div className="super-weekly">
                                    Super Weekly Premium
                                    <div className="offer-text">
                                        30 GB | 224 PKR
                                </div>
                                </div>
                                <div className="on-btn">
                                    <toggle>button</toggle>
                                </div>
                            </div>
                            <div className="lower-body1-bottom">
                                <div className="free-voice">
                                    Free Zong Mins
                                    <div className="offer-text">
                                        20 Zong min | Free
                                </div>
                                </div>
                                <div className="on-btn">
                                    <toggle>button</toggle>
                                </div>
                            </div>
                        </div>
                        <div className="lower-body2">
                            <div className="lower-body2-top">
                               "EXLUSIVE OFFER 
                                FOR MY ZONG APP"
                                <div className="inner-text">Super weekly Premium</div>
                            </div>
                            <div className="lower-body2-center">
                                <div className="gb">30
                                    <div className="all-network">GB Data (terms & conditions)</div>
                                </div>
                            </div>
                            <div className="lower-body2-bottom">
                                <div className="all">100<span className="all-network">All Network Minutes</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-wrapper">
                    <div className="footer-home">

                    </div>
                    <div className="footer-usage">

                    </div>
                    <div className="footer-Bundles">

                    </div>
                    <div className="footer-shop">

                    </div>
                    <div className="footer-More">

                    </div>

                </div>
            </div>

        )
    }
}

export default AppDesign
