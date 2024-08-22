"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";
import { SheetContent, SheetTrigger, Sheet } from "../components/ui/sheet";

const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Serviços",
        path: "/watch/servicos"
    },
    {
        name: "Resumo",
        path: "/watch/resumo"
    },
    {
        name: "Trabalhos",
        path: "/watch/trabalhos"
    },
    {
        name: "Contato",
        path: "/watch/contato"
    },
];

const Mobile = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuBurger className="text-[25px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="">
                    <Link href={"/"}>
                        <h1 className="title">EDUARDO <span className="text-accent">CRUZ</span></h1>
                    </Link>
                    <nav className="flex flex-col text-left gap-2 mt-16">
                        {links.map((link, index) => {
                            return <Link href={link.path} key={index} className={`${
                                link.path === pathname && "text-accent "}
                                capitalize font-medium hover:text-accent transition-all`}>
                                {link.name}
                            </Link>
                        })}
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
    )
};
export default Mobile;