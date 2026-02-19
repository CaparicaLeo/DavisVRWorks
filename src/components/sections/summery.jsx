import React from "react";
import { RiMailSendLine } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";

const Summery = () => {
	return (
		<section id="about" className="about-single-area innerpage-single-area">
			<div className="container">
				<div className="row">
					{/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
					<div className="col-lg-4">
						<SlideUp>
							<div className="about-image-part">
								<img
									src={"/images/about/sobre_mim.png"}
									alt="About Me"
								/>
							</div>
						</SlideUp>
					</div>
					{/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
					<div className="col-lg-8">
						<SlideUp>
							<div className="about-content-part">
								<h2>
									Meu nome é Davis Von Randow e sou Diretor de
									Arte e Ilustrador.
								</h2>
								<p>
									Eu crio universos visuais, com foco em
									ilustração, design e desenvolvimento de
									games, transitando entre projetos autorais,
									comerciais e educacionais. Possuo ampla
									experiência multidisciplinar, tendo
									trabalhado com diferentes formatos, públicos
									e segmentos criativos.
								</p>
								<p>
									Meu trabalho une conceito, narrativa e
									execução técnica, buscando sempre
									transformar ideias em experiências visuais
									consistentes. Ao longo da minha trajetória,
									desenvolvi projetos que equilibram
									identidade estética, funcionalidade e
									propósito, refletindo uma abordagem sólida e
									estratégica na criação visual.
								</p>
								<div className="hero-btns">
									<a
										href="contact.html"
										className="theme-btn"
									>
										Entre em contato
										<i>
											{" "}
											<RiMailSendLine size={16} />{" "}
										</i>
									</a>
								</div>
							</div>
						</SlideUp>
					</div>
					{/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
				</div>
			</div>
		</section>
	);
};

export default Summery;
