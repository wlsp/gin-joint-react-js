import '../scss/Footer.css'

const Footer = () => {
    return (
        <section id="footer">
            <article className="logo wrapper">
                <figure>
                    <img src="../images/logo.png" alt="" />
                </figure>
            </article>
            <article className="infos wrapper">
                <aside>
                    <h4>Find Us</h4>
                    <ul>
                        <br />
                        <li>132 9TH Avenue</li>
                        <li>New York, NY 10011</li>
                        <li>646-559-1671</li>
                        <li>info@btgnyc.com</li>
                    </ul>
                </aside>
                <aside>
                    <h4>Hours of Operation</h4>
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
                </aside>
            </article>
            <article className="downLogo">
                <figure className="bathtube">
                    <img src="../images/bath-illustration.svg" alt="" />
                </figure>
                <figure className="socialMedia">
                    <img src="../images/socialmedia.png" alt="" />
                </figure>
            </article>
        </section>
    );
}

export default Footer;