import React from 'react';
import emailjs from 'emailjs-com';
import './contact.css'


const Contact = () => {
    // 
    const SentEmailfor = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9cs3jfc', 'template_e5nx9ic', e.target, 'user_vTW9FUOtojA16NORB0648').then((res) => {
            console.log(res);
        }).catch(err => console.log(err));
    }

    return (
        <>
            <div className="container contact-form" id='contact'>
                <h1 className='contact-me'>Contact Me</h1>
                <p className='contact-para'>I am available for freelance work or job . Connect with me vis phone:</p>
                <p className='contact-para'><span className='contact-impt'>+923013154896</span> or email <span className='contact-impt'>aneesdetho58@gmail.com</span></p>
                <p className='contact-para'>Or if you want send your requirements through contact form </p>
                <form className='row row-2' onSubmit={SentEmailfor}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' className="form-control" />

                    <label htmlFor="email">Email</label>
                    <input type="email" name='user_email' className="form-control" />

                    <label htmlFor="name">Message</label>
                    <textarea name='message' rows='4' className="form-control" />

                    <input type="submit" className='btn btn-primary' value='send' />
                </form>
            </div>
        </>
    )
};

export default Contact;
