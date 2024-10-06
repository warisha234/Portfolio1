// import Header from "../components/header"
// import Link from "next/link"
import Image from "next/image"
import Contactus from "../public/side.webp"

export default function Contact() {
    return (

        <div className="container">
            <div className="item">
                <div className="contact">
                    <div className="first-text">Let's get in touch</div>
                    <Image src={Contactus} alt="contact us" className="image" />
                    <div className="social-links">
                        <span className="second-text">Connect with us:</span>
                        <link
                            rel="stylesheet"
                            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                        />
                        <ul className="social-media">

                            <li><a href="https://www.facebook.com/profile.php?id=61550896005267 "><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDA1Mjc4NzMyODMzMDQ3?story_media_id=3147399699153787319_53769659730&igsh=eWVseDV1N3pzd2N3 "><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/warisha-turab-8666b82b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://github.com/warisha234"><i className="fab fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="submit-form">
                    <h4 className="third-text">Contact Me</h4>
                    <form action="">
                        <div className="input-box">
                            <input type="text" className="input" id="name" placeholder="Enter your name" />
                            <label htmlFor="name" className="label">Name</label>
                        </div>
                        <div className="input-box">
                            <input type="email" className="input" id="email" placeholder="Enter your email" />
                            <label htmlFor="email" className="label">Email</label>
                        </div>
                        <div className="input-box">
                            <input type="tel" className="input" id="phone" placeholder="Enter your phone" />
                            <label htmlFor="phone" className="label">Phone</label>
                        </div>
                        <div className="input-box">
                            <textarea id="message" cols={30} rows={5} className="input" placeholder="Your message"></textarea>
                            <label htmlFor="message" className="label">Message</label>
                        </div>
                        <input type="submit" value="Submit" className="submit-btn" />
                    </form>
                </div>

            </div>
        </div>
    )
}