import React from 'react'

function Contact() {
    return (
        <>
            <section>
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>

                <form action="">
                    <div>
                        <div>
                            <label for="">First name</label>
                            <input type="text" placeholder='Enter your first name' />
                        </div>
                        <div>
                            <label for="">Last name</label>
                            <input type="text" placeholder='Enter your last name' />
                        </div>
                        <div>
                            <label for="">Email</label>
                            <input type="email" placeholder='yourname@email.com' />
                        </div>
                        <div>
                            <label for="">Message</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </form>

            </section>

        </>
    )
}

export default Contact