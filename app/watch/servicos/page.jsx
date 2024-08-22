"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const servicos = [
    {
        number: 1, 
        title: "JavaScript/TypeScript",
        logo: "/assets/javascript.png",  
        link: "",
        descricao: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da web"     
    },
    {
        number: 1, 
        title: "Tailwind CSS/SASS", 
        logo: "/assets/tailwind.png", 
        link: "",
        descricao: "Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como o Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas."     
    },
    {
        number: 1, 
        title: "React/React Native", 
        logo: "/assets/react.png",
        link: "", 
        descricao: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. Desenvolvida pelo Facebook em 2011, com a criação de views declarativas e baseando-se em componentes, possuía o intuito de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social e melhorar a manutenção de código."     
    },
    {
        number: 1, 
        title: "Primevue/Vue", 
        logo: "/assets/vue.png", 
        link: "",
        descricao: "O Vue.js conta com uma arquitetura que pode ser adotada de forma incremental, e que foca na renderização declarativa e na composição de componentes. Funcionalidades avançadas necessárias para aplicações complexas (como encaminhamento, gestão de estados e automação de compilação) são oferecidas por meio de bibliotecas e pacotes de suporte mantidos oficialmente,[9] sendo o Nuxt.js como uma das soluções mais populares."     
    },
];

const Servicos = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto"> 
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }} 
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                    {servicos.map((item, index) =>{
                        return (
                            <motion.div  
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }} 
                                className="flex-1 flex flex-col justify-center gap-1 group rounded-md border border-white/20 p-4" key={index}>
                                <div className="w-full flex justify-between items-center"> 
                                                                       
                                    <h1 className="h1 leading-none text-white group-hover:text-accent transition-all duration-500" target="_blank">
                                        {item.title}
                                    </h1>

                                    <Image src={item.logo}                     
                                        className="object-container rounded-full 
                                        mix-blend-lighten bg-primary w-[60px] h-[60px] p-2"
                                        priority quality={100}  
                                        width={60} 
                                        height={60}                      
                                        alt="dev-image"/>
                                </div>
                               
                                <p className="text-justify font-kalam text-white/60 text-wrap">{item.descricao}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>                
            </div>
        </section>
    );
};
export default Servicos;