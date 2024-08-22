"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link href={link.path} key={index} className={`${
                    link.path === pathname && "text-accent border-b-2 border-accent"}
                    capitalize font-medium hover:text-accent transition-all`}>
                    {link.name}
                </Link>
            })}
        </nav>
    );
};
export default Nav;
