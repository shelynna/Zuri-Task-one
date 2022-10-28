import React from 'react'
import './Connect.css'
import Footer from './Footer'
import Profile from './Profile'
import Social from './Social'

const Links = () => {

    return (
        <>

            <section className="container ">
                <Profile />
                <div className="links">
                    <div className='btn'><a href="https://twitter.com/iamshelynna" target="_blank" rel="noopener noreferrer">@iamshelynna</a></div>
                    <div className='btn'><a href="https://training.zuri.team/" target="_blank" rel="noopener noreferrer">Zuri Team</a></div>
                    <div className='btn'><a href="https://books.zuri.team/" target="_blank" rel="noopener noreferrer">Zuri Books</a></div>
                    <div className='btn'><a href="https://books.zuri.team/python-for-beginners" target="_blank" rel="noopener noreferrer">Python Books</a></div>
                    <div className='btn'><a href="https://background.zuri.team" target="_blank" rel="noopener noreferrer">Background Check for Coders</a></div>
                    <div className='btn'><a href="https://books.zuri.team/design-rules" target="_blank" rel="noopener noreferrer">Design Books</a></div>
                </div >
                <Social />
                <hr />
                <Footer />
            </section>

        </>
    )
}

export default Links;