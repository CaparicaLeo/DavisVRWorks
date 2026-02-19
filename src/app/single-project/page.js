"use client";
import Image from 'next/image'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { projectsData } from "@/utlits/fackData/projectData"

const ProjectContent = () => {
    const searchParams = useSearchParams();
    const idParam = searchParams.get('id');
    const project = projectsData.find(p => String(p.id) === String(idParam));
    const displayProject = project || projectsData[0];

    const getCorrectSrc = (fileName, category) => {
        if (!fileName) return "/images/projects/single-project.jpg";
        if (fileName.startsWith('http') || fileName.startsWith('/')) return fileName;
        const catPath = category ? category.toLowerCase() : "others";
        return `/images/projects/${catPath}/${fileName}`;
    };

    const isYouTube = (url) => url.includes("youtube.com") || url.includes("youtu.be");

    const isPanorama = (fileName) => {
        if (typeof fileName !== 'string') return false;
        return fileName.toLowerCase().includes('barra') || fileName.toLowerCase().includes('panorama');
    };

    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>{displayProject.category?.toUpperCase()} - {displayProject.client || "PERSONAL PROJECT"}</p>
                        <h1>{displayProject.title}</h1>
                    </div>
                </div>
            </div>
            
            <div className="single-project-image">
                <Image 
                    width={1095} 
                    height={1072} 
                    sizes='100vw' 
                    style={{width:"100%", height:"auto"}} 
                    src={getCorrectSrc(displayProject.src, displayProject.category)} 
                    alt={displayProject.title} 
                    priority
                />
            </div>

            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>{displayProject.year || "2024"}</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>{displayProject.client || "N/A"}</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>{displayProject.category}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>Description</h2>
                            <p>{displayProject.description || "Descrição em breve para este projeto."}</p>
                        </div>
                    </div>
                </div>

                <div className="row pt-30">
                    {displayProject.gallery && displayProject.gallery.length > 0 ? (
                        displayProject.gallery.map((item, index) => {
                            const panorama = isPanorama(item);
                            const youtube = isYouTube(item);
                            
                            // Define se o item deve ocupar a linha inteira (Ideia 3)
                            const isFullWidth = panorama || youtube;

                            return (
                                <div 
                                    className={`${isFullWidth ? 'col-lg-12' : 'col-lg-6'} mb-30`} 
                                    key={index}
                                >
                                    <div className={`single-image wow fadeInUp delay-0-${(index + 1) * 2}s`}>
                                        {youtube ? (
                                            /* Vídeo ocupando largura total para evitar lacunas */
                                            <div className="video-container" style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "10px", backgroundColor: "#000" }}>
                                                <iframe
                                                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                                    src={item}
                                                    title="YouTube video player"
                                                    frameBorder="0"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        ) : (
                                            /* Imagem: Se for panorama/barra usa 1920px, se não usa o padrão */
                                            <Image 
                                                width={isFullWidth ? 1920 : 633} 
                                                height={isFullWidth ? 600 : 679} 
                                                sizes='100%' 
                                                style={{width:"100%", height:"auto", borderRadius: "10px"}} 
                                                src={getCorrectSrc(item, displayProject.category)} 
                                                alt={`gallery-${index}`} 
                                            />
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-lg-12 text-center">
                            <p className="pt-20">Conteúdo adicional em breve.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const SingleProject = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProjectContent />
        </Suspense>
    );
};

export default SingleProject;