"use client"

import CountUp from "react-countup";

const experiences = [
    {
        tempo: 12,
        descricao: "Anos de Experiência"
    },
    {
        tempo: 26,
        descricao: "Projetos Concluidos"
    },
    {
        tempo: 8,
        descricao: "Tecnologias Dominadas"
    },
    {
        tempo: 500,
        descricao: "Códigos Comitados"
    },
];

const Experience = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {experiences.map((item, index) => {
                        return (
                            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                                <div className="flex items-center justify-center gap-0">
                                    <CountUp end={item.tempo} duration={2} delay={0.5} className="text-4xl xl:text-6xl font-extrabold text-accent"/> 
                                </div>                               
                                <p className={`${item.descricao.length > 10 ? "max-w-[80px]" : "max-w-[150px] bg-accent"} leading-snug text-white/80`}>{item.descricao}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default Experience;