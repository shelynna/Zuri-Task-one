import React from 'react'
import { Link } from 'react-router-dom'
import { links } from './links'



const Links = ({ path, to, name }) => {
    const linkObject = links.map((linkArr) => {
        return (
            <>
                <a id={linkArr.id} className='btn' href={linkArr.href} target={linkArr.target} rel={linkArr.rel} title={linkArr.title}>{linkArr.name}</a>
                <Link to={to} >{name}</Link>
            </>)
    })
    return (
        <>
            <section>
                <div className="links">
                    {linkObject}
                </div >
            </section>
        </>
    )
}

export default Links;