import styles from "./Nav.module.css";
import logo from "../../assets/logo-primary.png";
import homeIcon from "../../assets/home.png";
import projectIcon from "../../assets/project.png";
import cvIcon from "../../assets/cv.png";
import menu from "../../assets/menu.png";
import { NavLink, Outlet } from "react-router-dom";

function Nav() {
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
                            <NavLink to="/" className={({ isActive }) => isActive ? "navLinkActive" : ""} >
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
                        <img src={menu} alt="menu" />
                    </div>
                </div>
            </nav>
            <div className={styles.renderContent} >
                <Outlet />
            </div>
        </>
    )
}

export default Nav;