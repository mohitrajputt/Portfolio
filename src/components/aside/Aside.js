import styles from "./Aside.module.css";

function Aside() {
    return(
        <aside>
            <div className={styles.asideContainer} >
                <ul>
                    {/* for hire me */}
                    <li><a href="" ><i className="fa-solid fa-user-check"></i></a></li>
                    {/* for connect me */}
                    <li><a href="" ><i className="fa-solid fa-circle-nodes"></i></a></li>
                    {/* for coding process */}
                    <li><a><i className="fa-solid fa-code"></i></a></li>
                    {/* social links */}
                    <li><a href="https://www.linkedin.com/in/mohit-rajput-2789a0215" target="_blank"  rel="noopener noreferrer" ><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/mohitrajputt" target="_blank"  rel="noopener noreferrer" ><i className="fa-brands fa-github"></i></a></li>
                    <li><a href="https://www.instagram.com/_mohit_rajputt?igsh=d3ZyNWl6MTQ5Z3Nr" target="_blank"  rel="noopener noreferrer" ><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside;