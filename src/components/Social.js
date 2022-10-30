import React from 'react'
import './social.css'
import slack from '../../src/icons/slack.svg'
import github from '../../src/icons/github.svg'

function Social() {
    return (
        <>
            <div className='flex'>
                <a id='twitter' href='https://github.com/shelynna' target="_blank" rel="noopener noreferrer" className='div'><img src={slack} alt="my slack account" /></a>
                <a  href='https://github.com/shelynna' target="_blank" rel="noopener noreferrer" className='div'><img src={github} alt="my github account" /></a>

            </div>
        </>
    )
}

export default Social