import styles from "./Resume.module.css";
import resumePdf from "../../assets/resume-511.pdf";

function Resume() {
    return (
        <section className={styles.resumeSection} >
            <div className={styles.resumeContainer} >
                <div className={styles.resume} >
                    <embed src={resumePdf} type="application/pdf" />
                </div>
            </div>
        </section>
    )
}

export default Resume;