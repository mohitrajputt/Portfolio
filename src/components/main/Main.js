import styles from "./Main.module.css";
import {skills} from "../../data/SkillsData";
import { useState } from "react";
import emailjs from 'emailjs-com';

function Main() {
    const formatDate = () => {
        const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
        const today = new Date();
        return today.toLocaleDateString('en-US', options);
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.sendForm('service_so2k9ab', 'template_7uo8c12', e.target, 'eBFV8FnMxljhlNAiH');
            alert('Message sent successfully!');
            // Clear form fields
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send message. Please try again later.');
        }
    };

    return (
        <>
            <section className={styles.introSection} >
                <div className={styles.userImage} ></div>
                <div className={styles.quickDetails} >
                    <div className={styles.quickLink} >
                        <div className={styles.status} >
                            <span className={styles.available} ></span>
                            <p>Available for work</p>
                        </div>
                        <div className={styles.currentTime} >
                            <i className="fa-solid fa-calendar-days"></i>
                            <p>{formatDate()}</p>
                        </div>
                        <div className={styles.contactMe} >
                            <p>
                                <a href="#contact" >Contact Me</a>
                                <span>&#8599;</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.aboutMe} >
                        <div className={styles.intro} >
                            <p>SOFTWARE DEVELOPER</p>
                            <h2>Mohit Rajput</h2>
                            <p>As a budding Software Developer and Full Stack Developer, I bring a fresh perspective and a passion for crafting innovative solutions. While I may be a fresher, my project experiences showcase my dedication and potential in delivering impactful results.</p>
                        </div>
                        <div className={styles.address} >
                            <div className={styles.addressContainer} >
                                <div className={styles.local} >Agra, UP</div>
                                <div className={styles.country} > <i className="fa-solid fa-location-dot"></i> <span>IND</span></div>
                            </div>
                            <div className={styles.circle} ></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.skillSection} >
                <div className={styles.skillHeader} >
                    <div className={styles.headerContent} >
                        <p>Technical Skills  </p>
                    </div> 
                </div>
                <div className={styles.skillContent} >
                    {skills.map((skill, index) => (
                        <div className={styles.box} key={index} >
                            <div className={styles.aboutSkills} >
                                <div className={styles.skillIcon} >{skill.title}</div>
                                <div className={styles.skillName} >
                                    <h3>{skill.text}</h3>
                                    <p>{skill.about}</p>
                                </div>
                            </div>
                            <div className={styles.skillTotal}>
                                <div className={styles.skillValue} style={{ width: `${skill.value}%`}} > </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        <section className={styles.backgroundSection} >
            <div className={styles.education} >
                <div className={styles.educationHeader} >Education</div>
                <div className={styles.eduContent} >
                    <div className={styles.trackPath} >
                        <div className={styles.trackStop} ></div>
                        <div className={styles.trackStart} ></div>
                    </div>
                    <div className={styles.eduContentContainer} >
                        <div className={styles.eduLogo} >
                            <img src="https://fetrbs.org/wp-content/uploads/2020/05/fetrbs-150x150.png" width="80px" alt="add-link" />
                        </div>
                        <div className={styles.eduInfo} >
                            <p>2020-2024</p>
                            <h3>B.Tech From AKTU</h3>
                            <p>Computer Science & Engineering</p>
                        </div>
                    </div>
                    <div className={styles.eduContentContainer} >
                        <div className={styles.eduLogo} >
                            <img src="https://seeklogo.com/images/B/board-of-high-school-intermediate-uttar-pradesh-logo-C72295BBDE-seeklogo.com.png" width="80px" alt="add-link" />
                        </div>
                        <div className={styles.eduInfo} >
                            <p>2017-2020</p>
                            <h3>9th-12th From SSPR</h3>
                            <p>Physics, Chemistry & Math</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.experience} >
                <div className={styles.experienceHeader} >Experience</div>
                <div className={styles.eduContent} >
                    <div className={styles.trackPath} >
                        <div className={styles.trackStop} ></div>
                        <div className={styles.trackStart} ></div>
                    </div>
                    <div className={styles.eduContentContainer} >
                        <div className={styles.eduLogo} >
                            <img src="https://media.licdn.com/dms/image/D560BAQFcNG2twN7e4Q/company-logo_200_200/0/1710027820835?e=1723680000&v=beta&t=6dCbTKTYUXEpdzabSrXNzF0rcr2zpglRElpOST9XvN0" width="80px" alt="add-link" />
                        </div>
                        <div className={styles.eduInfo} >
                            <p>July-Aug 2023</p>
                            <h3>Dabotics PVT LTD</h3>
                            <p>Web Developer Intern</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className={styles.connect} >
            <div className={styles.connectHeader} >
                <div>Contact</div>
            </div>
            <div className={styles.connectContent} >
                <form className={styles.form} onSubmit={handleSubmit} >
                    <input placeholder="Name" name="from_name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input placeholder="Email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <textarea placeholder="Message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                    <button type="submit" >Submit</button>
                </form>
                <div className={styles.connectInfoBox} >
                    <div className={styles.addressHead} >Address</div>
                    <div className={styles.addressContentContainer} >
                        <div className={styles.addressInfoContainer} >
                            <div className={styles.connectInfoHead} >
                                <div className={styles.addressIcon} >
                                    <i className="fa-solid fa-map-location-dot"></i>
                                </div>
                            </div>
                            <div className={styles.addressinfo} >
                                <p>Visit Me</p>
                                <p>283101-Agra, Uttar Pradesh, INDIA</p>
                            </div>
                        </div>
                        <div className={styles.addressInfoContainer} >
                            <div className={styles.connectInfoHead} >
                                <div className={styles.addressIcon} >
                                    <i className="fa-solid fa-address-card"></i>
                                </div>
                            </div>
                            <div className={styles.addressinfo} >
                                <p>Contact Info</p>
                                <p>+91 9997656397</p>
                                <p>999mohitrajput@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <div >Developed by Mohit Rajput</div>
            <div>
                <a href="#home" >Scroll To Top <span>&#8673;</span></a>
            </div>
        </footer> 
        </>
    )
}

export default Main;