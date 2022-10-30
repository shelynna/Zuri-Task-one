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
                    <a className='btn' href="https://twitter.com/iamshelynna" target="_blank" rel="noopener noreferrer" title="Redirects you to my twitter profile" >@iamshelynna</a>
                    <a id="btn__zuri" className='btn' href="https://training.zuri.team/" target="_blank" rel="noopener noreferrer" title="This redirects to zuri training page">Zuri Team</a>
                    <a id="books" className='btn' href="https://books.zuri.team/" target="_blank" rel="noopener noreferrer" title="This redirects to zuri books">Zuri Books</a>
                    <a id="book__python" className='btn' href="https://books.zuri.team/python-for-beginners?ref_id=shelynna" target="_blank" rel="noopener noreferrer" title="This redirects to zuri python books">Python Books</a>
                    <a id="pitch" className='btn' href="https://background.zuri.team" target="_blank" rel="noopener noreferrer" title="This redirects to background check">Background Check for Coders</a>
                    <a id="book__design" className='btn' href="https://books.zuri.team/design-rules" target="_blank" rel="noopener noreferrer" title="This redirects to design books">Design Books</a>
                </div >

                <Social />

                <Footer />
            </section>

        </>
    )
}

export default Links;