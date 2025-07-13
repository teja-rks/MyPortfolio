import React from 'react'
import './About.css'
// import themepattern from '../../assets/theme_pattern.svg'
import img from '../../assets/IMG_2821 (1).jpg'
// import leftimage from '../../assets/about_profile.svg'
import java from '../../assets/java.svg'
import html from '../../assets/html (1).svg'
import css from '../../assets/css (1).svg'
import js from '../../assets/javascript (1).svg'
import react from '../../assets/react.svg'
import mysql from '../../assets/mysql.svg'
import dsa from '../../assets/dsa.jpg'
import node from '../../assets/nodejs.svg'
import bootstrap from '../../assets/bootstrap.svg'
import ml from '../../assets/machine-learning-png1.png'
import arrow from '../../assets/arrowup.svg'
import check from '../../assets/shape.png'
import express from '../../assets/expressjs.svg'
import mongodb from '../../assets/MongoDB.svg'
const About = () => {
  return (
    <div id="about" className='about'>
        <div className='about-title'>
            <h1><span>A&nbsp;</span>bout Me</h1>
            <hr/>
            {/* <img src={themepattern}alt=''></img> */}
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={img} alt=''/>
            </div>
            <div className='about-right'>
                <div className="about-para">
                    <p><img src={check} alt="" /> &nbsp;Hi, I'm Teja, a B.Tech Computer Science  Engineering student</p>
                    <p><img src={check} alt="" /> &nbsp;College : &nbsp;ACE Engineering College</p>
                    <p><img src={check} alt="" /> &nbsp;Aspiring Computer Science enthusiast with a passion for innovation, skilled in coding, web development, and AI-driven solutions.</p>
                    <p><img src={check} alt="" /> &nbsp;Driven to create impactful technologies, with hands-on experience in smart projects and competitive coding excellence.</p>
                </div>
                <div className='about-skills'>
                    {/* <div className='about-skill'><p>HTML&&CSS</p><hr style={{width:"50%"}}/></div>
                    <div className='about-skill'><p>React Js</p><hr style={{width:"60%"}}/></div>
                    <div className='about-skill'><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                    <div className='about-skill'><p>Next Js</p><hr style={{width:"50%"}}/></div> */}
                    {/* <div className="about-skill"><h3>Techincal Skills :</h3><p>JAVA, DSA, HTML, CSS, JAVASCRIPT, REACT JS</p></div> */}
                    <h3>Skills</h3>
                    <div className="about-skill">
                        <img src={java} alt="" />
                        <img src={dsa} alt="" />
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={js} alt="" />
                        <img src={react} alt="" />
                        <img src={express} alt="" />
                        <img src={mongodb} alt="" />
                        <img src={mysql} alt="" />
                        <img src={node} alt="" />
                        <img src={bootstrap} alt="" />
                        <img src={ml} alt="" />


                    </div>  
                </div>
            </div>
        </div>
        <div className='about-achivements'>
            <div className="about-achivement">
                <h1>LeetCode</h1>
                <p>Rating : 1238</p>
                <p>Solved 200+ problems</p>
                <a href='https://leetcode.com/u/teja_rks/' target="_blank">View Profile <img src={arrow} alt="" /></a>
            </div>
            {/* <hr/> */}
            <hr/>
            <div className="about-achivement">
                <h1>Codechef</h1>
                <p>2-star coder</p>
                <p>Rating :1418</p>
                <a href='https://www.codechef.com/users/teja_rks' target="_blank">View Profile <img src={arrow} alt="" /></a>
            </div>
            <hr/>
            <div className="about-achivement">
                <h1>Geeks For Geeks</h1>
                <p>1st Rank from institution</p>
                <p>Solved 300+ problems</p>
                <a href='https://www.geeksforgeeks.org/user/teja_rks/?utm_source=geeksforgeeks&utm_medium=colleges&utm_campaign=users' target="_blank">View Profile <img src={arrow} alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default About