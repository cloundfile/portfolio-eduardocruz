import Experience from "@/components/Experience";
import { Button } from "@/components/ui/button";
import { FaFileDownload } from "react-icons/fa";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="conteudo">
          <div className="text-center xl:text-left order-2 xl:order-none">
              <h1 className="h1 text-5xl">Eduardo Cruz</h1>
              <span className="span mb-9">Desenvolvedor de sistemas</span>
              <p className="max-w-[500px] font-kalam text-justify text-white/80 mb-9 mt-6">Sou um programador com mais de 12 anos de experiência no desenvolvimento de soluções web. 
                Meu foco é criar aplicações eficientes e elegantes que resolvam problemas reais e atendam às necessidades dos usuários. 
                Minha jornada no mundo da programação é marcada pela busca constante por aprendizado e melhoria, 
                e estou sempre em busca de novos desafios para expandir meus conhecimentos e habilidades.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Link href="/uploads/eduardo_cruz_cv.pdf" target="_blank">
                  <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 bg-primary text-accent text-base hover:bg-accent
                    hover:text-primary hover:transition-all duration-500 border-accent" >
                    <span>Download CV</span>
                    <FaFileDownload className="text-md"/>
                  </Button>
                </Link>
                <div className="mb-8 xl:mb-0">
                  <Social containerStyles="flex gap-6" iconStyles="flex justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-500 border border-accent rounded-full w-9 h-9"/>
                </div>
              </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Experience />
    </section>
  );
}
