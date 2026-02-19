"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiArrowRightUpLine } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";
import { projectsData } from "@/utlits/fackData/projectData";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const animations = ["slideIn", "fadeIn", "scaleUp"];

const getRandomAnimation = () => {
	const randomIndex = Math.floor(Math.random() * animations.length);
	return animations[randomIndex];
};
const getCorrectSrc = (fileName, category) => {
	if (!fileName) return "/images/projects/single-project.jpg"; // Fallback
	if (fileName.startsWith("http") || fileName.startsWith("/"))
		return fileName;
	const catPath = category ? category.toLowerCase() : "others";
	return `/images/projects/${catPath}/${fileName}`;
};

const Portfolio = ({ className }) => {
	const searchParams = useSearchParams();
	const filterParam = searchParams.get("filter");

	const [category, setCategory] = useState("All");
	const [animationClass, setAnimationClass] = useState("");

	useEffect(() => {
		if (filterParam) {
			setCategory(filterParam);
		}
	}, [filterParam]);

	const handleCategoryClick = (item) => {
		setCategory(item);
		const randomAnimation = getRandomAnimation();
		setAnimationClass(randomAnimation);
	};

	// ------ filter unique category
	const filteredCategory = ["All"];
	projectsData.forEach(({ category }) => {
		if (!filteredCategory.includes(category)) {
			filteredCategory.push(category);
		}
	});
	// ------ filter unique category

	const filteredProjects =
		category === "All"
			? projectsData
			: projectsData.filter((image) => image.category === category);

	return (
		<section id="portfolio" className={`projects-area ${className}`}>
			<div className="container">
				<div className="container-inner">
					<div className="row">
						<div className="col-xl-12 col-lg-12">
							<SlideUp>
								<div className="section-title text-center">
									<h2>Works & Projects</h2>
									<p>
										Confira alguns dos meus projetos,
										desenvolvidos com foco em conceito,
										narrativa visual e execução técnica,
										refletindo minha atuação em Ilustração,
										animação e desenvolvimento de games.
									</p>
								</div>
							</SlideUp>
						</div>
					</div>
					<SlideUp>
						<ul className="project-filter filter-btns-one justify-content-left pb-15">
							{filteredCategory.map((item, id) => (
								<li
									key={id}
									onClick={() => handleCategoryClick(item)}
									className={
										item === category ? "current" : ""
									}
								>
									{item}
								</li>
							))}
						</ul>
					</SlideUp>
					<div className="row project-masonry-active overflow-hidden">
						{filteredProjects.map(
							({ category, id, src, title }) => (
								<Card
									key={id}
									id={id}
									category={category}
									src={getCorrectSrc(src, category)}
									title={title}
									animationClass={animationClass}
								/>
							),
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;

const Card = ({ category, title, src, animationClass, id }) => {
	return (
		<div
			className={`col-lg-4 col-md-6 item branding game ${animationClass}`}
		>
			<SlideUp delay={id}>
				<div className="project-item style-two">
					<div className="project-image">
						<Image
							width={383}
							height={249}
							sizes="100vw"
							style={{ width: "100%", height: "auto" }}
							src={src}
							alt="Project"
						/>
						<Link
							href={`/single-project?id=${id}`}
							className="details-btn"
						>
							<RiArrowRightUpLine />{" "}
						</Link>
					</div>
					<div className="project-content">
						<span className="sub-title">{category}</span>
						<h3>{title}</h3>
					</div>
				</div>
			</SlideUp>
		</div>
	);
};
