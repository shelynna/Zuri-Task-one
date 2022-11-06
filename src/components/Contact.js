import React, { useEffect, useState } from "react";
import "./contact.css";
const Contact = () => {
    const [slackName, setSlackName] = useState("");
    const initialValues = { firstname: "", lastname: "", email: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        setIsSuccess(true);


        setTimeout(() => {

            setIsSuccess(false);
        }, 2000);
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstname) {
            errors.firstname = "Please enter your firstname";
        } else if (!values.lastname) {
            errors.lastname = "Please enter your lastname";
        }
        else if (!values.email) {
            errors.email = "Please enter your email";
        }
        else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format";
        }
        else if (!values.message) {
            errors.message = "Please enter a message";
        } else {
            setFormValues({ firstname: "", lastname: "", email: "", message: "" });
        }

        return errors;
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors, isSubmit, formValues]);

    useEffect(() => {
        setSlackName("Shelynna");
    }, []);

    return (
        <section className="contact-container">
            <section className="contact-box">
                {isSubmit}
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div>
                        {isSuccess && (
                            <div className="success">
                                <p>Message Sent</p>
                            </div>
                        )}
                    </div>
                ) : (
                    ""
                )}
                <h3 className="section-title">Contact Me</h3>
                <p className="section-p">
                    Hi there, contact me to ask me about anything you have in mind.
                </p>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="column">
                            <div className="input-box">
                                <label htmlFor="first_name">First name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your first name"
                                    name="firstname"
                                    id="first_name"
                                    value={formValues.firstname}
                                    onChange={handleChange}
                                />
                                <p className="error">{formErrors.firstname}</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="input-box">
                                <label htmlFor="last_name">Last name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your last name"
                                    name="lastname"
                                    id="last_name"
                                    value={formValues.lastname}
                                    onChange={handleChange}
                                />
                                <p className="error">{formErrors.lastname}</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="yourname@email.com"
                                id="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                            <p className="error">{formErrors.email}</p>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-box">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                placeholder="Send me a message and I'll reply you as soon as possible..."
                                name="message"
                                value={formValues.message}
                                onChange={handleChange}
                            ></textarea>
                            <p className="error">{formErrors.message}</p>
                        </div>
                    </div>
                    <div>
                        <div className="input-box">
                            <div className="flex-check">
                                <input type="checkbox" name="" id="checkbox_id" />
                                <label htmlFor="checkbox_id">
                                    You agree to providing your data to {slackName} who may
                                    contact you.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="input-box">
                        <button id="btn__submit" type="submit">
                            Send message
                        </button>
                    </div>
                </form>
            </section>
        </section>
    );
};

export default Contact