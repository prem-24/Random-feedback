import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <div className='about'>
            <Link to='/about'>
                <>
                <h1>Im a About Page</h1>
                <p>This is a Feedback App using react created using with my students</p>
                </>
            </Link>
        </div>
    )
}

export default About