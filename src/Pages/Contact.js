import React from "react";
import '../scss/Contact.css'

const Contact = () => {
    return (<>
        <section id="contact">
            <article className="experience">
                <div>
                <p>Contact Us</p>
                <h1>Experience The 1920'S Prohibition</h1>
                <p>Want to get in touch? Drop us a dime or shoot us an email using the form below.</p>
                </div>
            </article>
            <figure className="neonLogo">
            <img src="../images/bar-neon.png" alt="" />
            </figure>
            <article className="address">
                <h1>
                    132 9th Avenue New York
                </h1>
            </article>
            <article className="formular">
                <aside className="findUs">
                    <div>
                    <h1>Get in touch</h1>
                    <ul>
                        <li>132 9TH Avenue</li>
                        <li>New York, NY 10011</li>
                        <li>646-559-1671</li>
                        <li>info@btgnyc.com</li>
                    </ul>
                    </div>
                    <div>
                    <h1>Hours of Operation</h1>
                    <ul className="openingHours">
                        <br />
                        <li>Monday</li>
                        <li>Tuesday-Friday</li>
                        <li>Saturday</li>
                        <li>Sunday</li>
                        <br />
                        <li>8am — 4pm</li>
                        <li>8am — 10pm</li>
                        <li>9am — 10pm</li>
                        <li>9am — 4pm</li>
                    </ul>
                    </div>
                </aside>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" name="Mail" id="mailto" placeholder="Email Address" />
                    <input type="number" name="tel" id="telNumb" placeholder="Mobile" />
                    <textarea name="" id="text" cols="10" rows="10" placeholder="Message"></textarea>
                    <button>Submit</button>
                </form>
            </article>
        </section>
    </>
    );
}

export default Contact;