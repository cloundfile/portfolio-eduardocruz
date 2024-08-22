"use client"; 

import { motion } from "framer-motion";
import { RxAvatar } from "react-icons/rx";
import { FaWhatsapp, FaMailBulk, } from "react-icons/fa";

const info = [
    {
        icon: <RxAvatar />,
        title: "Nome",
        descricao: "Eduardo Cruz"
    },
    {
        icon: <FaWhatsapp />,
        title: "Telefone",
        descricao: "(046) 99914-7716"
    },
    {
        icon: <FaMailBulk />,
        title: "Email",
        descricao: "tecnologiaesolucoespr@gmail.com"
    },
];

const Contato = () => {
    return (
        <motion.section 
            initial={{ opacity: 0}}
            animate={{ 
                opacity: 1,
                transition: { delay: 0.4, duration: 0.4, ease: "easeIn"},
            }} 
            className="py-6">  
                <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row gap-[30px]">
                        <div className="xl:w-[100%] order-2 xl:order-none">
                            <div className="flex flex-col gap-2 p-3 rounded-xl">
                                <h3 className="text-4xl text-accent">Contatos</h3>
                                <div className="border-b border-white/20 mb-6"></div> 
                                <div className="flex items-center border-b border-white/20 pb-6">
                                    <ul  className="flex flex-col gap-6">
                                        {info.map((item, index) => {
                                            return (
                                                <li key={index} className="flex items-center gap-6">
                                                    <div className="w-[72px] h-[72px] xl:w-72px xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                                        <div className="text-[28px]">{item.icon}</div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="text-white/60">{item.title}</p>
                                                        <h3 className="text-xl">{item.descricao}</h3>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>                                
                            </div>
                        </div>                        
                    </div>   
                </div>  
        </motion.section>
    );
};
export default Contato;