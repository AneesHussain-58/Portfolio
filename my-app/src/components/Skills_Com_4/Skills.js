import React from 'react';
import './skills.css'
import html from './html.png';
import icon from './css-icon.png';
import bootstr from './bootstr.png';
import javascript from './javascript.png';
import ratjs from './reactjs.png';
import msql from './msql.jpg';


const Services = () => {
    return <div>

        <div className="container" id='skills'>
            <h1 className='heading-text'>My Skills</h1>
            <div class="grid-container">
                <div className='grid-inner-cont'>
                    <img src={html} alt="Error loading..." className='img-html' />
                    <div className='text_grid'>
                        <h2 className='heading_grid'>HTML</h2>
                        <p className='p_text'>I am working on Html more than 3__years</p>
                        <p className='p_text'>Strong grip on this field</p>
                    </div>
                </div>
                <div className='grid-inner-cont'>
                    <img src={icon} alt="Error loading..." className='img-html' />
                    <div className='text_grid'>
                        <h2 className='heading_grid'>CSS</h2>
                        <p className='p_text'>I am working on Css more than 3__years</p>
                        <p className='p_text'>Using this I will make websites more attractive </p>
                    </div>
                </div>
                <div className='grid-inner-cont'>
                    <img src={bootstr} alt="Error loading..." className='img-html' />
                    <div className='text_grid'>
                        <h2 className='heading_grid'>Bootstrap</h2>
                        <p className='p_text'>I am working on Html more than 2__years</p>
                        <p className='p_text'>Using this library make the websites responsive.</p>
                    </div>
                </div>
                <div className='grid-inner-cont'>
                    <img src={javascript} alt="Error loading..." className='img-html' />
                    <div className='text_grid'>
                        <h2 className='heading_grid'>JavaScript</h2>
                        <p className='p_text'>More than 2years of experience</p>
                        <p className='p_text'>Best Practice when you are dealing with the actions</p>
                    </div>
                </div>
                <div className='grid-inner-cont'>
                    <img src={ratjs} alt="Error loading..." className='img-html' />
                    <div className='text_grid'>
                        <h2 className='heading_grid'>React.js</h2>
                        <p className='p_text'>In the this field 1+years experience </p>
                        <p className='p_text'>Interesting javascript library</p>
                    </div>
                </div>
                <div className='grid-inner-cont'>
                    <img src={msql} alt="Error loading..." className='img-html' />
                    <div className='text_grid'>
                        <h2 className='heading_grid'>Mysql Database</h2>
                        <p className='p_text'>I am using database more than 3__years</p>
                        <p className='p_text'>Using to make database when i make the websites</p>
                    </div>
                </div>

            </div>
        </div>
    </div>;
};

export default Services;

