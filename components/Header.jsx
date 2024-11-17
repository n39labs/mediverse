import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";


const Header = () => {
    return (
        <header className="h-fit text-white bg-companybg flex flex-col items-center">
            <div className="h-20 w-full container mx-auto flex justify-between items-center">

            <div className="xl:hidden">
                    <MobileNav/>
                </div>

                <Link href="/" className="flex items-center px-5">
                    <Image 
                        src="/mre.svg"
                        width={100}
                        height={100}
                        alt="Logo"
                    className=""/>
                        
                </Link>

                <div className="hidden xl:flex items-center gap-16">
                    <Nav />
                    <Link href="/contact">
                        <Button className="bg-companygg text-white font-semibold border-companyfg border-2 hover:bg-companyfg hover:text-companybg">Contact Us</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;