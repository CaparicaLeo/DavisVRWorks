"use client";
import React from "react";
import Link from "next/link";
import {
	RiFacebookCircleFill,
	RiTwitterXLine,
	RiBehanceFill,
	RiInstagramFill,
	RiLinkedinFill,
	RiCircleFill,
	RiLinksFill,
	RiDownloadLine,
} from "@remixicon/react";
import PartnersMarquee from "./partnersMarquee";
import SlideUp from "@/utlits/animations/slideUp";

const Hero = () => {
	return (
		<section id="about" className="about-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<SlideUp>
							<div className="about-image-part">
								<img
									src={"/images/about/profile.png"}
									alt="About Me"
								/>
								<h2>Davis Von Randow</h2>
								<p>Ilustrador de Curitiba para o mundo.</p>
								<div className="about-social text-center">
									<ul>
										<li>
											<Link href="https://www.instagram.com/davis_vrworks/">
												<RiInstagramFill size={20} />
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/in/davisvonrandow/">
												<RiLinkedinFill size={20} />
											</Link>
										</li>
										<li>
											<Link href="https://www.behance.net/davisVRworks">
												<RiBehanceFill size={20} />
											</Link>
										</li>
										<li>
											<Link href="https://www.behance.net/davisVRworks">
												<RiLinksFill size={20} />
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</SlideUp>
					</div>
					{/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
					<div className="col-lg-8">
						<SlideUp>
							<div className="about-content-part">
								<p>Hello There!</p>
								<h2>
									Davis Von Randow — Ilustrador e Designer,
									criando soluções visuais estratégicas para
									games e projetos criativos.
								</h2>
								<div className="adress-field">
									<ul>
										<li className="d-flex align-items-center">
											<i>
												<RiCircleFill size={14} />
											</i>{" "}
											Disponivel para projetos
										</li>
									</ul>
								</div>
								<div className="hero-btns">
									<a
										href="/curriculo.pdf"
										download="Curriculo_Davis_Von_Randow.pdf"
										className="theme-btn"
									>
										Download CV{" "}
										<i>
											<RiDownloadLine size={16} />
										</i>{" "}
									</a>
								</div>
							</div>
						</SlideUp>
						<SlideUp>
							<PartnersMarquee />
						</SlideUp>
					</div>
					{/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
				</div>
			</div>
		</section>
	);
};

export default Hero;
