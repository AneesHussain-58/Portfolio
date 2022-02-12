import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <>
      <div className="header-wrap" id='home'>

        <div className="main-info">
          <h4 className='header-text-name'>Hello, My Name is </h4>
          <h1 className='anees'>Anees Hussain Detho</h1>
          <Typed
            className='typed-text'
            strings={['Here you know about Anees Hussain', 'I am a web developer', 'web designer']}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <a className='btn-main' href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSDbtkdPHBkHgMgXfmMnXDgqzJFgswSwMJcTrhqHRCFnXDSjfwZtQxPlFGzghJWLHJfHZrxK">Contact Me</a>
        </div>
      </div>
    </>);
};

export default Header;
