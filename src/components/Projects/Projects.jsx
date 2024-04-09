import './Projects.css'
import ExpenseTracker from '../../assets/expense-tracker-website.png'
import PortfolioWebsite from '../../assets/portfolio-website.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faUser, faPhone, faBuildingColumns, faEnvelope, faCircleDot, faGlobe, faPaperPlane } from '@fortawesome/free-solid-svg-icons'


import { faXTwitter, faLinkedin, faFacebook, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Projects() {
    return (
        <>
            <main className="container-project-wrapper">
                <div className="project-container">
                    <div className="project-details">
                        <div className="project-img">
                            <a href="https://github.com/suranjancse2002/Expense-Tracker" target='_blank'>
                                <img loading='lazy' decoding='async' fetchPriority='high' src={ExpenseTracker} alt="" />
                            </a>

                        </div>
                        <div className="project-description">
                            <div className="project-title">
                                <div className="heading">Title</div>
                                <div className="body">Expense Tracker website</div>
                            </div>
                            <div className="project-title">
                                <div className="heading">Description</div>
                                <div className="body">
                                    The Expense Tracker Website is helpful to track your monthly expenses.
                                    It allows you to set your monthly budget and update that.
                                    You can add a new expense by submitting a form which has different fields like categories, tags, date, payment method, amount, description, add receipt etc.
                                    There is a progress bar which gives you a visual representation of how much of your budget has been spent.
                                    A notification will come when your expenses cross 50% of your budget.
                                    You can edit your expenses card and correct any mistake.
                                    You can download a monthly summary pdf of all expenses.
                                </div>
                            </div>
                            <div className="project-title">
                                <div className="heading">Technology</div>
                                <div className="body">In this project I have used HTML, CSS and JAVASCRIPT for the frontend. Node js & Express js for backend and PostgreSQL for Database. I have also created Fetch API to fetch data from the backend. A third party library pie-chart.js is also used in this project. I have also used Passport local and Bcrypt for authentication.</div>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/suranjancse2002/Expense-Tracker" target='_blank'>
                                    <FontAwesomeIcon className='icon' icon={faGithub} />
                                </a>
                                <a href="https://youtu.be/kEavUbpQNak" target='_blank'>
                                    <FontAwesomeIcon className='icon' icon={faYoutube} />
                                </a>
                                <a href="https://youtu.be/kEavUbpQNak" target='_blank'>
                                    <FontAwesomeIcon className='icon' icon={faGlobe} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />
                    <div className="project-details">

                        <div className="project-description">
                            <div className="project-title">
                                <div className="heading">Title</div>
                                <div className="body">Portfolio website</div>
                            </div>
                            <div className="project-title">
                                <div className="heading">Description</div>
                                <div className="body">
                                    This is my portfolio website. It has Home, Projects, Resume and Contact us sections. It is fully responsive website. Resume section has two features. You can read the resume and can also download it. Contact us section gives you a direct communication medium.
                                </div>
                            </div>
                            <div className="project-title">
                                <div className="heading">Technology</div>
                                <div className="body">In this project I have used React Js and CSS along with that. This website is fully responsive made with CSS media queries. Fontawesome icons are used in this website.</div>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/suranjancse2002/Resume-Suranjan" target='_blank'>
                                    <FontAwesomeIcon className='icon' icon={faGithub} />
                                </a>
                                <a href="https://youtu.be/kEavUbpQNak" target='_blank'>
                                    <FontAwesomeIcon className='icon' icon={faYoutube} />
                                </a>
                                <a href="https://github.com/suranjancse2002/Resume-Suranjan" target='_blank'>
                                    <FontAwesomeIcon className='icon' icon={faGlobe} />
                                </a>
                            </div>
                        </div>
                        <div className="project-img">
                            <a href="#">
                                <img loading='lazy' decoding='async' fetchPriority='high' src={PortfolioWebsite} alt="" />
                            </a>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}