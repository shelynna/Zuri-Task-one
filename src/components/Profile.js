import React from 'react'
import img from '../../src/icons/Shelynna.png'
import './profile.css'


function Profile() {
    return (
        <>
        <div className='profile-image'>
            <img src={img} alt="my profile" />
            <h2>Shelynna B. Adjana</h2>
        </div>
        </>
    )
}

export default Profile