import React from 'react'
import { RiBookLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card year={'2025 - Present'} title={'Ilustrador / Designer de Jogos'} institution={'PDM - Porrada Deusas e Monstros'} />
                                    <Card year={'2022 - 2025'} title={'Diretor de Arte Sênior'} institution={'Huginn Studio'} />
                                    <Card year={'2022 - 2025'} title={'Instrutor de Games / Ilustração'} institution={'Grupo UNINTER'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'2024 - 2025'} title={'Metricas Ágeis'} institution={'Alura'} />
                                    <Card year={'2013'} title={'Dynamic Sketching, Creature / Character Design'} institution={'CGMA 2D Academy'} />
                                    <Card year={'2011'} title={'Design Gráfico 3D / Iniciação Científica'} institution={'Veiga de Almeida UVA'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}