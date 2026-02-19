import React from "react";
import { RiImageFill, RiGameFill, RiFilmFill } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";
import Link from "next/link";

const ServiceGrid = () => {
	return (
		<section id="services" className="services-area innerpage-single-area">
			<div className="container">
				<div className="container-inner">
					<div className="row">
						<div className="col-xl-12 col-lg-12">
							<SlideUp>
								<div className="section-title text-center">
									<h2>Meus Serviços</h2>
								</div>
							</SlideUp>
						</div>
					</div>
					<div className="row">
						<Card
							id={1}
							icon={<RiImageFill size={60} />}
							title={"Ilustração"}
							description={
								"Ilustrações autorais e únicas, desenvolvidas a partir de conceito, narrativa e identidade visual. Cada projeto é pensado para fugir do lugar-comum das artes genéricas e entregar imagens com personalidade, intenção e assinatura criativa."
							}
                            category={"Illustrations"}
						/>
						<Card
							id={2}
							icon={<RiFilmFill size={60} />}
							title={"Animação"}
							description={
								"Animações institucionais, educacionais e comerciais focadas em clareza, ritmo e impacto visual. Projetos pensados para comunicar ideias, fortalecer marcas e transformar mensagens em experiências visuais envolventes."
							}
                            category={"Animation"}
						/>
						<Card
							id={3}
							icon={<RiGameFill size={60} />}
							title={"Criação de Jogos"}
							description={
								"Jogos autorais, incluindo boardgames, cardgames e jogos empresariais. Do conceito às mecânicas, cada projeto é desenvolvido para gerar engajamento, estratégia e experiências memoráveis."
							}
                            category={"Games"}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceGrid;

const Card = ({ icon, title, description, id, category }) => {
	return (
		<div className="col-lg-4 col-md-6">
			<SlideUp delay={id}>
				<Link href={`/works?filter=${category}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="service-item" style={{ cursor: 'pointer' }}>
                        {icon}
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                </Link>
			</SlideUp>
		</div>
	);
};
