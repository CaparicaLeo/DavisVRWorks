import { RiMailLine, RiMapPinLine } from '@remixicon/react'
import { FaWhatsapp } from 'react-icons/fa' 
import React from 'react'
import SlideUp from '../../../utlits/animations/slideUp'

const ContactOption = () => {
    const linkStyle = {
        color: 'inherit',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        display: 'inline-block' 
    };

    return (
        <div className="col-lg-4">
            <SlideUp>
                <div className="contact-content-part">
                    {/* STUDIO */}
                    <SlideUp delay={2}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i> <RiMapPinLine size={20} /></i>
                            </div>
                            <h2>Meu Studio :</h2>
                            <p>Curitiba, Paraná - BR</p>
                        </div>
                    </SlideUp>

                    {/* WHATSAPP COM HOVER */}
                    <SlideUp delay={3}>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                            <div className="contact-icon">
                                <i> <FaWhatsapp size={20} /></i>
                            </div>
                            <h2>Whatsapp :</h2>
                            <p>
                                <a 
                                    href="https://wa.me/5541984599613" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                    style={linkStyle}
                                >
                                    +55 41 98459-9613
                                </a>
                            </p>
                        </div>
                    </SlideUp>

                    {/* EMAIL COM HOVER */}
                    <SlideUp delay={4}>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                            <div className="contact-icon">
                                <i> <RiMailLine size={20} /></i>
                            </div>
                            <h2>Email :</h2>
                            <p>
                                <a 
                                    href="mailto:davis.vrworks@gmail.com"
                                    className="contact-link"
                                    style={linkStyle}
                                >
                                    davis.vrworks@gmail.com
                                </a>
                            </p>
                        </div>
                    </SlideUp>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactOption