import React from 'react'
import Marquee from "react-fast-marquee";

const PartnersMarquee = () => {
    return (
        <div className="about-content-part-bottom">
            <h2>Empresas / Clientes</h2>
            <div className="company-list">
                <div className="scroller">
                    <div className="scroller__inner">
                        <Marquee>
                            <img src={"/images/client-logos/4pets.png"} alt="" />
                            <img src={"/images/client-logos/chevrolet.png"} alt="" />
                            <img src={"/images/client-logos/enerzon.png"} alt="" />
                            <img src={"/images/client-logos/globo.png"} alt="" />
                            <img src={"/images/client-logos/jovemnerd.png"} alt="" />
                            <img src={"/images/client-logos/madrona.png"} alt="" />
                            <img src={"/images/client-logos/mojuviagens.png"} alt="" />
                            <img src={"/images/client-logos/pertobilingue.png"} alt="" />
                            <img src={"/images/client-logos/ultracoffeebrasil.png"} alt="" />
                            <img src={"/images/client-logos/uninter.png"} alt="" />
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnersMarquee