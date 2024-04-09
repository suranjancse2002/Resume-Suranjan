import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contacts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contacts() {
    const form = useRef();
    const notify = () => {
        toast.success('Message sent successfully!');
    }

    const notifyError = () => {
        toast.error('Message not sent');
    }
    
    const sendEmail = (e) => {
        e.preventDefault();
        // env.config()

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    notify()
                    e.target.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    notifyError()
                },
            );
    };
    return (
        <>
            <main className="contact-us-wrapper">
                <div className="contact-us-container">
                    <form className='contact-us-container' ref={form} onSubmit={sendEmail}>
                        <ToastContainer
                            theme="dark"
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            transition:Bounce
                        />
                        <input type="text" className='input-text input' placeholder='Name' name='from_name' required />
                        <input type="email" className='input-text input' placeholder='Email-id' name='user_email' required />
                        <input type="text" className='input-text input' placeholder='Job Description' name='job_desc' required />
                        <textarea name="message" id="message" cols="30" rows="10" className='input input-textarea' placeholder='Write a message here...' required></textarea>

                        <button className='btn'><FontAwesomeIcon className='icon' icon={faPaperPlane} /> </button>
                    </form>
                </div>
            </main>
        </>
    )
}