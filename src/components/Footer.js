import "./FooterStyles.css"
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-continer">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{
                        color: "#fff", marginRight: "2rem"
                    }}/>
                    <div>
                        <p>AASTU, Addis Ababa</p>
                        <p>Ethiopia</p>
                    </div>
                </div>

                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{
                            color: "#fff", marginRight: "2rem"
                        }} />
                        +251-98-508-6515
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{
                            color: "#fff", marginRight: "2rem"
                        }} />
                        alemnehmeseret@gmail.com
                    </h4>
                </div>

            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>
                    This is me Meseret Alemnew. student at AASTU.
                    I enjoy discusing new projects and design challenges.
                </p>

                <div className="social">
                    <a href="https://www.facebook.com/chris.alamnah/" target="_blank">
                        <FaFacebook size={30} style={{
                                    color: "#fff", marginRight: "1rem"
                                }} />
                    </a>
                    <a href="https://github.com/mess-ale" target="_blank">
                    <FaGithub size={30} style={{
                                color: "#fff", marginRight: "1rem"
                            }} />
                    </a>
                    <a href="https://www.linkedin.com/in/meseret-alemnew-311174256/" target="_blank">
                    <FaLinkedin size={30} style={{
                                color: "#fff", marginRight: "1rem"
                            }} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer