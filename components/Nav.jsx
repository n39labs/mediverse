"use client";

import { navlinks } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="flex gap-16">
            {navlinks.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${
                            link.path === pathname &&
                            "text-companyfg border-b-2 border-companyfg"
                        } capitalize font-medium hover:text-companyfg transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;