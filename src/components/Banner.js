import React from "react";
import  {FaFacebook ,FaTwitter,FaInstagram,FaGithubSquare } from "react-icons/fa" 

const Banner = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content"></div>
            <div className="header__section">
            <ul className="header__ul">
              <li>
                <FaFacebook/>

              </li>
              <li>
                <FaTwitter/>

              </li>
              
              <li>
                <FaInstagram/>

              </li>
              <li>
                <FaGithubSquare/>
              </li>
              
            </ul>
            <h1> I m Achref Ben Kadaa </h1>
            <p>IM Achref A Web developerb with Short Time experince in this Field</p>

            </div>
            
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
