import Nav from "./Nav";
import Link from "next/link";
import Mobile from "./Mobile";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <header className="py-4 xl:py-6 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}>
                    <h1 className="h1">EDUARDO <span className="text-accent">CRUZ</span></h1>
                </Link>
                <div className="navbar">                    
                    <Nav />
                </div>

                <div className="xl:hidden">
                    <Mobile />
                </div>
            </div>
        </header>
    );
};
export default Header;