"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="relative hidden xl:flex xl:w-[400px] xl:h-[400px] ">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }} 
                >
                <div className="w-[200px] h-[300px]">
                    <Image src="/assets/photo.png"                     
                        className="object-container border-priamry border-4 rounded-full 
                        mix-blend-lighten bg-accent hover:bg-primary"
                        priority quality={100}                         
                        alt="dev-image"
                        fill/>
                </div>
            </motion.div>
        </div>
    );
}; 
export default Photo; 