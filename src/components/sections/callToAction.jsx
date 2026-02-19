import React from "react";
import Link from "next/link";
import { RiDownloadLine } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";

const CallToAction = () => {
	return (
		<section className="call-to-action-area">
			<div className="container">
				<div className="row">
					{/* <!-- START ABOUT TEXT DESIGN AREA --> */}
					<div className="col-lg-12">
						<SlideUp>
							<div className="about-content-part call-to-action-part text-center">
								<h2>
									Pronto para dar vida ao seu projeto com
									criatividade e estratégia?
								</h2>
								<p>
									Entre em contato para conversarmos sobre
									ideias, prazos e possibilidades. Seja para
									ilustração, games ou universos visuais
									completos, vamos construir algo único
									juntos. Também estou aberto a oportunidades
									full-time ou part-time para desenvolver
									projetos com identidade forte e propósito.
								</p>
								<div className="hero-btns">
									<Link href="/contact" className="theme-btn">
										Iniciar um projeto{" "}
										<i>
											<RiDownloadLine size={16} />
										</i>
									</Link>
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

export default CallToAction;
