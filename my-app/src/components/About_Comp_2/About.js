import React from 'react';
import log from './anees2.jpeg';
import './About.css'

const About = () => {
    return (
        <>
            <div className='container' id='about'>
                <div className="row">
                    <div className="col__2">
                        <img src={log} alt="error loading...." className='about_img' />
                    </div>
                    <div className="col__2">
                        <h1 className="about_heading">
                            About Me
                            <hr />
                        </h1>
                        <div className="about_meta">
                            <h3>I'm <span className='about-anees'> Anees Hussain </span> and I'm <span className='about-anees'> Full Stack Web Developer </span></h3>
                            <p className='about_text'>Hey,
                                <br />
                                I am a final year student and working as full stack web developer. I have an Experience in ReactJS.
                            </p>
                            <div className="container my-5">
                                <button type="button" class="btn btn-primary btn-lg ">Download Cv</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;
