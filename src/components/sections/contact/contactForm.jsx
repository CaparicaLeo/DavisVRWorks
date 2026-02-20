"use client";
import React, { useState } from "react";
import { RiMailLine } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";

const ContactForm = () => {
	const [result, setResult] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Enviando....");

		const formData = new FormData(event.target);
		const object = Object.fromEntries(formData); 

		const response = await fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(object),
		});

		const data = await response.json();

		if (data.success) {
			setResult("Mensagem enviada com sucesso!");
			event.target.reset();
		} else {
			setResult("Algo deu errado. Tente novamente.");
		}
	};

	return (
		<div className="col-lg-8">
			<SlideUp>
				<div className="contact-form contact-form-area">
					<form className="contactForm" onSubmit={onSubmit}>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label htmlFor="name">Nome Completo</label>
									<input
										type="text"
										id="name"
										name="name"
										className="form-control"
										placeholder="Seu Nome"
										required
									/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label htmlFor="email">
										Endereço de Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="form-control"
										placeholder="seuemail@exemplo.com"
										required
									/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<label htmlFor="message">
										Sua Mensagem
									</label>
									<textarea
										name="message"
										id="message"
										className="form-control"
										rows="4"
										placeholder="Escreva sua mensagem"
										required
									></textarea>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group mb-0">
									<button type="submit" className="theme-btn">
										Enviar{" "}
										<i>
											<RiMailLine size={15} />
										</i>
									</button>
								</div>
								{/* Feedback visual para o usuário */}
								<div className="mt-3">
									<span>{result}</span>
								</div>
							</div>
						</div>
					</form>
				</div>
			</SlideUp>
		</div>
	);
};

export default ContactForm;
