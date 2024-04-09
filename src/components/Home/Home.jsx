import './Home.css'
import Suranjan from '../../assets/suranjan.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faUser, faPhone, faBuildingColumns, faEnvelope, faCircleDot } from '@fortawesome/free-solid-svg-icons'


import { faXTwitter, faLinkedin, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
    return (
        <>
            <main className="container">
                <section className="profile">
                    <div className="profile-img-container">
                        <img loading='lazy' decoding='async' fetchPriority='high' src={Suranjan} alt="" className="profile-img" />
                    </div>
                    <div className="profile-details">
                        <div className='profile-details-items'>
                            <FontAwesomeIcon className='icon' icon={faUser} />
                            <p>Suranjan Dhara</p>
                        </div>
                        <div className='profile-details-items'>
                            <FontAwesomeIcon className='icon' icon={faLocationDot} />
                            <p>Kolkata, West Bengal</p>
                        </div>
                        <div className='profile-details-items'>
                            <FontAwesomeIcon className='icon' icon={faBuildingColumns} />
                            <p>Jadavpur University, Kolkata</p>
                        </div>
                        <div className='profile-details-items'>
                            <FontAwesomeIcon className='icon' icon={faPhone} />
                            <p>+91-96417XXXXX</p>
                        </div>
                        <div className='profile-details-items'>
                            <FontAwesomeIcon className='icon' icon={faEnvelope} />
                            <p>suranjandhara08@gmail.com</p>
                        </div>
                    </div>

                    <div className="social-icons">
                        <a href="#" target='_blank'>
                            <FontAwesomeIcon className='icon' icon={faXTwitter} />
                        </a>
                        <a href="https://www.linkedin.com/in/suranjan-dhara-b38615235/" target='_blank'>
                            <FontAwesomeIcon className='icon' icon={faLinkedin} />
                        </a>
                        <a href="#" target='_blank'>
                            <FontAwesomeIcon className='icon' icon={faFacebook} />
                        </a>
                        <a href="#" target='_blank'>
                            <FontAwesomeIcon className='icon' icon={faInstagram} />
                        </a>
                        <a href="https://github.com/suranjancse2002" target='_blank'>
                            <FontAwesomeIcon className='icon' icon={faGithub} />
                        </a>
                    </div>
                </section>
                <section className="bio">
                    <div className="bio-dot-design">
                        <FontAwesomeIcon className='icon' icon={faCircleDot} />
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                        <FontAwesomeIcon className='icon' icon={faCircleDot} />
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                        <FontAwesomeIcon className='icon' icon={faCircleDot} />
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                        <FontAwesomeIcon className='icon' icon={faCircleDot} />
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                        <FontAwesomeIcon className='icon' icon={faCircleDot} />

                    </div>
                    <div className="bio-text">
                        <div className="para">
                            <div className="heading">
                                Bio
                            </div>
                            <div className="body">
                                I am Suranjan Dhara, currently pursuing BE CSE (2021 - 25) from Jadavpur University. I'm a passionate in Web Development specializing in MERN stack development. With a keen eye for detail and a love for crafting elegant solutions, I bring creativity and efficiency to every project. Let's innovate and code our way to a brighter digital future!
                            </div>
                        </div>
                        <div className="para">
                            <div className="heading">
                                Core Subjects
                            </div>
                            <div className="body body-skill">
                                <div className="skillset">
                                    <li>DBMS</li>
                                    <li>Computer Networks</li>
                                    <li>Operating Syatem</li>
                                </div>
                                <div className="skillset">
                                    <li>CO</li>
                                    <li>OOPs</li>
                                    <li>DSA</li>
                                </div>
                                <div className="skillset">
                                    <li>Analysis of Algorithms</li>
                                </div>
                            </div>
                        </div>
                        <div className="para">
                            <div className="heading">
                                Skills
                            </div>
                            <div className="body body-skill">
                                <div className="skillset">
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Tailwind</li>
                                </div>
                                <div className="skillset">
                                    <li>Javascript</li>
                                    <li>Node js</li>
                                    <li>React js</li>
                                </div>
                                <div className="skillset">
                                    <li>Express js</li>
                                    <li>MongoDB</li>
                                    <li>PostgreSQL</li>
                                </div>
                            </div>
                        </div>
                        <div className="para">
                            <div className="heading">
                                What's Next
                            </div>
                            <div className="body">
                                Now, I am open to collaborate in any industry based projects. Learning new technologies is my passion. I love to work with you and turn your ideas into real world projects. Please don't hessitate to reach me out. I will be very glad to work with you. Thank you!
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}