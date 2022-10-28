import React from 'react'
import './footer.css'
import zuri from '../../src/icons/zuri.svg'
import ingessive from '../../src/icons/ingessive.svg'


function Footer() {
    return (
        <>
        <footer >
            <div className='footer'>
                    <a href="https://background.zuri.team" target="_blank" rel="noopener noreferrer"><img src={zuri} alt="zuru logo" /></a>
                    <a href='https://background.zuri.team' target='_blank' rel="noopener noreferrer" ><h2>HNG Intenship 9 Fronend Task</h2> </a>
                    <img src={ingessive} alt="ingress logo" />

            </div>
        </footer>
        </>
    )
}

export default Footer