import styles from "./Nav.module.css";
import logo from "../../assets/logo-primary.png";
import homeIcon from "../../assets/home.png";
import projectIcon from "../../assets/project.png";
import cvIcon from "../../assets/cv.png";
import { NavLink, Outlet } from "react-router-dom";
import Aside from "../aside/Aside";
import { useState } from "react";

function Nav() {

    const [menuStatus, setMenuStatus] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    function handleMenuStatus() {
        setMenuStatus(!menuStatus);
        setIsChecked(!isChecked);
    }

    return (
        <>
            <nav>
                <div className={styles.logoContainer} >
                    <div className={styles.logo} >
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className={styles.navButtons} >
                    <ul className={styles.navList} >
                        <li>
                            <NavLink to="/Portfolio" end className={({ isActive }) => isActive ? "navLinkActive" : ""} >
                                <img src={homeIcon} alt="add-link" />
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="projects" className={({ isActive }) => isActive ? "navLinkActive" : ""}  >
                                <img src={projectIcon} alt="add-link" />
                                <span>Projects</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="resume" className={({ isActive }) => isActive ? "navLinkActive" : ""}  >
                                <img src={cvIcon} alt="add-link" />
                                <span>Resume</span>
                            </NavLink>
                        </li>
                    </ul>
                    <div className={styles.menu} >
                        <div className={styles.menuContainer} >
                            <label htmlFor="menu"  ></label>
                            <input type="checkbox" id="menu" className={styles.inputMenu} onChange={handleMenuStatus} checked={isChecked} />
                            <ul className={styles.menuList} >
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {menuStatus &&
                <div className={styles.menuButtons} >
                    <ul>
                        <li><NavLink to="/Portfolio" end className={({ isActive }) => isActive ? "navLinkActive" : ""} onClick={handleMenuStatus} >Home</NavLink></li>
                        <li><NavLink to="projects" className={({ isActive }) => isActive ? "navLinkActive" : ""} onClick={handleMenuStatus}>Projects</NavLink></li>
                        <li><NavLink to="resume" className={({ isActive }) => isActive ? "navLinkActive" : ""} onClick={handleMenuStatus} >Resume</NavLink></li>
                        {/* <li><NavLink to="coding" className={({ isActive }) => isActive ? "navLinkActive" : ""} >Coding Profile</NavLink></li> */}
                        {/* <li><NavLink to="" className={({ isActive }) => isActive ? "navLinkActive" : ""} >Contact</NavLink></li> */}
                    </ul>
                </div>
            }
            <div className={styles.renderContent} id="main" >
                <Outlet />
            <section className={styles.mobileFooter} >
                <p>Developed by Mohit Rajput</p>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/mohit-rajput-2789a0215" target="_blank" rel="noopener noreferrer" >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/mohitrajputt" target="_blank" rel="noopener noreferrer" >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/_mohit_rajputt?igsh=d3ZyNWl6MTQ5Z3Nr" target="_blank" rel="noopener noreferrer" >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </section>
            </div>
            <Aside />
        </>
    )
}

export default Nav;