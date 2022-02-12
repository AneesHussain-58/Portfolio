import React from 'react';
import './projects.css'
import bootstr from './bootstr.png';
import javascript from './javascript.png';
import msql from './msql.jpg';
import np from './npm.png';
import gith from './gith.png';
import recticon from './reacticon.png';
import php from './php-icon.png';

const Projects = () => {
  return (
    <>
      <div className="container colr-cont" id='project'>
        <h1 className='heading-projects'>Projects and Tools <hr className='new5' /></h1>
        <div className="gri-container">
          <div className="project-heading">
            <h3 className='heading-subproject top-below'>Crypto Based web page</h3>
            <p className='text-details'>I have created a web page using react.js includes hooks etc</p>
          </div>
          <div className="project-heading">
            <h3 className='heading-subproject'>Books Management System</h3>
            <p className='text-details'>This project represents the information about the books present in the library. What are books availabe in library. <br />
              Books category, Books names etc. <br />This project is implemented by Html, Css, Bootstrap and javascript</p>
          </div>
          <div className="project-heading">
            <h3 className='heading-subproject'>Quiz web App</h3>
            <p className='text-details'>I have created web app using react.js <br />This is all about the results that you carried in the test. <br />This includes the answers as true or false</p>
          </div>

        </div>
        <div className="grid-container">
          <div className="project-heading">
            <h3 className='heading-subproject top-bot'>BMI Calculator</h3>
            <p className='text-details'>I have created a web page using react.js br
              In this project you will calculate the values, CRUD operations and much more that is usefull in our daily life</p>
          </div>
          <div className="project-heading">
            <h3 className='heading-subproject top-bot'>BMI Calculator</h3>
            <p className='text-details'>I have created a web page using react.js <br />
              In this project you will calculate the values, CRUD operations and much more that is usefull in our daily life</p>
          </div>
        </div>
        <h3 className='tool-text'>Tools: </h3>
        <div className="images-tools">
          <img src={javascript} alt="Error loading" className='Tool-images' />
          <img src={bootstr} alt="Error loading" className='Tool-images' />
          <img src={np} alt="Error loading" className='Tool-images' />
          <img src={recticon} alt="Error loading" className='Tool-images' />
          <img src={php} alt="Error loading" className='Tool-images' />
          <img src={gith} alt="Error loading" className='Tool-images' />
          <img src={msql} alt="Error loading" className='Tool-images' />
        </div>
      </div>
    </>
  );
};

export default Projects;
