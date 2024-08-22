"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import WorkSlidesBtns from "@/components/WorkSliderBtns";
import { Swiper, SwiperSlide } from "swiper/react"
import { BsLink, BsGithub } from "react-icons/bs";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";

const projetos = [
    {
        num: 1,
        title: "Projeto ADMRH",
        categoria: "fullstack",
        descricao: "Sistema gerenciamento rh orgãos publicos",
        mockup:  "/assets/admrh.jpg",
        live:    "https://validacao.admrh.inf.br/",
        github:  "/", 
        stacks: [
            { name: "Java"},
            { name: "CSS"},
            { name: "Oracle"}, 
            { name: "Primefaces"}
        ]
    },
    {
        num: 2,
        title: "Projeto Genesis",
        categoria: "fullstack",
        descricao: "Sistema entrada produção agricula, cooperativa integrada",
        mockup:  "/assets/genesis.jpg",
        live:    "https://genesis.integrada.coop.br",
        github:  "/", 
        stacks: [
            { name: "Java"},
            { name: "SASS"},
            { name: "Oracle"}, 
            { name: "Primevue"},
            { name: "Spring Boot"},
        ]
    },
    {
        num: 3,
        title: "Projeto Portal Cooperado",
        categoria: "fullstack",
        descricao: "Sistema gerenciamento dados produtor agricula",
        mockup:  "/assets/cooperados.jpg",
        live:    "https://cooperado.integrada.coop.br/",
        github:  "/", 
        stacks: [
            { name: "Java"},
            { name: "SASS"},
            { name: "Oracle"}, 
            { name: "Primevue"},
            { name: "Spring Boot"},
        ]
    },
    {
        num: 4,
        title: "Projeto Cacau Ramos",
        categoria: "fullstack",
        descricao: "Sistema cursosn online crochet",
        mockup:  "/assets/cacau.png",
        live:    "/",
        github:  "/", 
        stacks: [
            { name: "Java"},
            { name: "SASS"},
            { name: "Oracle"}, 
            { name: "React"},
            { name: "Prisma"},
        ]
    },
    {
        num: 5,
        title: "Projeto Site Inneo",
        categoria: "fullstack",
        descricao: "Site institucional inneobr",
        mockup:  "/assets/inneo.jpg",
        live:    "https://inneo.org",
        github:  "/", 
        stacks: [
            { name: "Java"},
            { name: "Oracle"}, 
            { name: "React"},
            { name: "Prisma"},
            { name: "Tailwind"},
        ]
    },
];

const Trabalhos = () => {
    const [projeto, setProjeto] = useState(projetos[0]);
    const handleSliderCharge = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProjeto(projetos[currentIndex]);
    };
    return (
        <motion.section 
            initial={{ opacity: 0}}
            animate={{ 
                opacity: 1,
                transition: { delay: 0.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
                <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                            <div className="flex flex-col gap-[30px]">
                                <div className="text-center xl:text-start h-[50px] text-4xl leading-none font-extrabold text-transparent text-outline uppercase">
                                    {projeto.title}
                                </div>                                                                 
                                <p className="h-[70px] text-center xl:text-start text-white/60">{projeto.descricao}</p>  
                                <h2 className="text-2xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize border-b border-white/20 pb-4">{projeto.categoria}</h2> 
                                <ul className="flex gap-4">
                                    {projeto.stacks.map((item, index) => {
                                        return (
                                            <li className="text-xl text-accent" key={index}>
                                                {item.name}
                                                {index !== projeto.stacks.length -1 && ","}
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="border-b border-white/20"></div>
                                <div className="flex items-center gap-4">
                                    <Link href={projeto.live} target="blank">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[30px] rounded-md bg-white/5 flex justify-center items-center group">
                                                    <BsLink />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Projeto Online</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>

                                    <Link href={projeto.github} target="blank">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[30px] rounded-md bg-white/5 flex justify-center items-center group">
                                                    <BsGithub />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github Code</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                </div>
                            </div> 
                        </div>
                        <div className="w-full xl:w-[50%]">
                            <Swiper spaceBetween={30}
                                slidesPerView={1}
                                className="xl:h-[380px] mb-12"
                                onSlideChange={handleSliderCharge}>
                                {projetos.map((item, index) => {
                                    return (
                                        <SwiperSlide className="w-full" key={index}>
                                            <div className="h-[280px] xl:h-[310px] relative group flex justify-center items-center">
                                            <div className="absolute top-0 botton-0 w-full h-full z-10" ></div>
                                                <div className="relative w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md">
                                                    <Image src={projeto.mockup} fill className="center rounded-md" alt={projeto.title}/>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                                <WorkSlidesBtns 
                                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none rounded-sm xl:rounded-full p-1"
                                    bntStyles="xl:bg-accent hover:bg-black/20 xl:hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
                                />
                            </Swiper>
                        </div>
                    </div>                    
                </div>
        </motion.section>
    );
};
export default Trabalhos;