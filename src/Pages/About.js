import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import image from '../Assets/image/banner/banner1.jpg'
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} style={{ width: '600px', height: '400px' }} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Arman Hosen!</h1>
                        <p className="py-6 text-xl">To work in an environment where challenges are more acute and ample scope of doing work in a cross-cultural job environment. With my challenging opportunity, I will try to help the organization to achieve its vision and to help the society towards the development indeed.</p>

                        <a className="btn btn-outline m-2" href='https://github.com/ArmanAru07'><GoMarkGithub></GoMarkGithub></a>
                        <a className="btn btn-outline m-2" href='https://www.linkedin.com/in/arman-hosen-aa18a421a/'><FaLinkedin></FaLinkedin></a>

                        <Link to='/Resume'> <button className="btn btn-primary">My Resume</button></Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;