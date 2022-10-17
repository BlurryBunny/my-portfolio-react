import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import logo from '../assets/img/logo-name.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon4-blank.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt='Logo' className="footer-logo" />
                    </Col>

                    <Col sm={6}>

                        <div className="footer-icons-box">
                            <div className="social-icon">
                                <a target="_blank" href="https://www.linkedin.com/in/ulises-dominguez"><img src={navIcon1} alt="linkedin-icon" /></a>
                                <a target="_blank" href="https://www.facebook.com/TheFalseSlim/"><img src={navIcon2} alt="face-icon" /></a>
                                <a target="_blank" href="https://github.com/BlurryBunny"><img src={navIcon3} alt="git-icon" /></a>
                            </div>
                        </div>
                        <div className="footer-CR-box">
                            <p>CopyRight 2022. All right Reserved</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
