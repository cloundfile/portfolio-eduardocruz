"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FaHtml5, FaCss3, FaJs, FaReact,  FaFigma, FaNode } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SiTailwindcss, SiNextdoor } from "react-icons/si";
import { motion } from "framer-motion";

const sobre = {
    title: "Quem sou eu",
    descricao: "Desenvolvedor de sistemas, apaixonado pelo que faz, desde criança sempre fui uma pessoa curiosa para entender como tudo funciona, programar faz parte de minha vida assim como respirar",
    info: [
        {
            fieldName: "Nome",
            fieldValue: "Eduardo Cruz"
        }, 
        {
            fieldName: "Celular whatsapp",
            fieldValue: "(046) 99914-7716"
        },      
        {
            fieldName: "Email contato",
            fieldValue: "tecnologiaesolucoespr@gmail.com"
        },
        {
            fieldName: "Perfil profissional",
            fieldValue: "https://www.linkedin.com/in/inneobr"
        },
    ]
} 

const experiencia = {
    icon: '/assets/resume/badge.svg',
    title: 'Experiência profissional',
    descricao: 'Desenvolvedor Sistema Fullstack, trabalho com as linguagens java, javascript, banco de dados oracle, mysql, postgres e mongoDb, Oracle Cloud.',
    items: [
        {
            empresa: 'ADMRH Informática Ltda',
            funcao: 'Java / Primefaces',
            duracao: '09/04/2024 - 09/07/2024'
        },
        {
            empresa: 'Integrada Cooperativa',
            funcao: 'Java / Spring Boot',
            duracao: '01/03/2022 - 01/08/2023'
        },
        {
            empresa: 'Orbank Group',
            funcao: 'Java / Android',
            duracao: '01/01/2021 - 20/12/2021'
        },
        {
            empresa: 'Marelice Cora',
            funcao: 'HTML5 / PHP / Postgres',
            duracao: '01/01/2020 - 31/12/2020'
        },
        {
            empresa: 'Torres Eolicas De Concreto',
            funcao: 'HTML5 / PHP / Postgres',
            duracao: '01/01/2020 - 31/12/2020'
        },
        {
            empresa: 'Palmasnet telecom',
            funcao: 'Linux / Rede',
            duracao: '01/02/2006 - 20/10/2007'
        },

    ]
}

const formacao = {
    icon: '/assets/resume/badge.svg',
    title: 'Onde Estudei',
    descricao: 'Meu estudo superior foi realizado no Instituto Federal do Paraná, onde Aperfeiçoei meus conhecimentos em programação. Também realizei vários cursos de aperfeiçoamento em instituições de ensino online.',
    items: [
        {
            instituicao: 'Instituto Federal do Paraná',
            descricao: 'Sistemas de Informação',
            duracao: '2017 - 2022'
        },
        {
            instituicao: 'Microsoft',
            descricao: 'Certificação  Fundamentos de Rede',
            duracao: '2020'
        },
        {
            instituicao: 'Microsoft',
            descricao: 'Certificação Gestão de Riscos em TI',
            duracao: '2020'
        },
        {
            instituicao: 'Microsoft',
            descricao: 'Certificação Segurança e privacidade do computador',
            duracao: '2020'
        },
        {
            instituicao: 'Microsoft',
            descricao: 'Certificação Conceitos básicos desenvolvimento de software',
            duracao: '2020'
        },
        {
            instituicao: 'Microsoft',
            descricao: 'Certificação IA para líderes de negócios',
            duracao: '2020'
        },
        {
            instituicao: 'Rocketseat',
            descricao: 'Certificação de Spring Boot, Java, Docker',
            duracao: '2023'
        },
        {
            instituicao: 'Rocketseat',
            descricao: 'Certificação HTML, CSS, javaScript, Git, Github',
            duracao: '2023'
        },
        {
            instituicao: 'Rocketseat',
            descricao: 'Certificação SEO Devs',
            duracao: '2023'
        },
        {
            instituicao: 'Rocketseat',
            descricao: 'Certificação Clean Code',
            duracao: '2023'
        },

    ]
}

const habilidades = {
    title: 'Habilidades',
    descricao: 'Minhas habilidades principais',
    habilidade: [
        {
            icon: <FaHtml5 />,
            name: 'Html5'
        },
        {
            icon: <FaCss3 />,
            name: 'Css3'
        },        
        {
            icon: <SiTailwindcss />,
            name: 'Tailwindcss'
        },
        {
            icon: <FaJs />,
            name: 'Js'
        },
        {
            icon: <FaReact />,
            name: 'React'
        },
        {
            icon: <FaNode />,
            name: 'Node'
        },
        {
            icon: <FaFigma />,
            name: 'Figma'
        },
    ]
}

const Resumo = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1 ,  
                transition:{
                    delay: 0.5, 
                    duration: 0.4, 
                    ease: "easeIn" },
                }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
                <div className="container mx-auto">
                    <Tabs defaultValue="formacao" className="flex flex-col xl:flex-row gap-[60px]">
                        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                            <TabsTrigger value="formacao">Formação</TabsTrigger>
                            <TabsTrigger value="experiencias">Esperiências</TabsTrigger>
                            <TabsTrigger value="habilidades">Habilidades</TabsTrigger>
                            <TabsTrigger value="sobre">Sobre</TabsTrigger>
                        </TabsList>

                        <div className="min-h-[70vh] w-full">
                            <TabsContent value="formacao" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{formacao.title}</h3>
                                    <p className="max-w-[600px] text-justify text-white/60 mx-auto xl:mx-0">{formacao.descricao}</p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {formacao.items.map((item, index) => {
                                                return (
                                                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 border-2"> 
                                                        <span className="font-kalam text-accent text-[10px]">{item.duracao}</span> 
                                                        <h3 className="font-teko uppercase text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.descricao}</h3>                                                                             
                                                        <div className="font-kalam flex items-center gap-3">                                                           
                                                            <spam className="w-[6px] h-[6px] rounded-full bg-accent"></spam>
                                                            <p className="text-white/60">{item.instituicao}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            <TabsContent value="experiencias" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{experiencia.title}</h3>
                                    <p className="max-w-[600px] text-justify text-white/60 mx-auto xl:mx-0">{experiencia.descricao}</p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {experiencia.items.map((item, index) => {
                                                return (
                                                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 border-2"> 
                                                        <span className="font-kalam text-accent text-[10px]">{item.duracao}</span> 
                                                        <h3 className="font-teko uppercase text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.funcao}</h3>                                                                             
                                                        <div className="font-kalam flex items-center gap-3">                                                           
                                                            <spam className="w-[6px] h-[6px] rounded-full bg-accent"></spam>
                                                            <p className="text-white/60">{item.empresa}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            <TabsContent value="habilidades" className="w-full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[3px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">{habilidades.title}</h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{habilidades.descricao}</p>
                                    </div>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        {habilidades.habilidade.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{item.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>

                            <TabsContent value="sobre" className="w-full text-center xl:text-left">
                               <div className="flex flex-col gap-[30px]">
                                    <h3 className="text-4xl font-bold">{sobre.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{sobre.descricao}</p>
                                    <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-4 max-w-[620px] mx-auto xl:mx-0">
                                        {sobre.info.map((item, index) => {
                                            return (    
                                                <li className="w-full text-left items-center" key={index}>
                                                    <p className="text-white/60">{item.fieldName}:</p>
                                                    <p className="text-xl">{item.fieldValue}</p>
                                                </li>
                                            );
                                        })}
                                    </ul>
                               </div>
                            </TabsContent>
                        </div>
                    </Tabs>                    
                </div>
        </motion.div>
    );
};
export default Resumo;