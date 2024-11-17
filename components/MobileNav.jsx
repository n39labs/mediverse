"use client";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
    SheetTitle,
    SheetHeader,
    SheetDescription,
} from "@/components/ui/sheet";
import { navlinks } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Button } from "./ui/button";

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <HiOutlineMenuAlt1 className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col w-[60%] bg-companybg/80">
                <SheetHeader className="text-white hidden">
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>Options</SheetDescription>
                </SheetHeader>

                <div className="mt-32 mb-20 flex justify-center text-2xl">
                    <Link href="/">
                        <Image
                            src="/mre.svg"
                            width={300}
                            height={300}
                            alt="Logo"
                            className=""
                        />
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8 text-white">
                    {navlinks.map((link, index) => {
                        return (
                            <SheetClose asChild key={index}>
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
                            </SheetClose>
                        );
                    })}

                    <SheetClose asChild>
                        <Link href="/contact">
                            <Button className="bg-companygg text-white font-semibold border-companyfg border-2 hover:bg-companyfg hover:text-companybg">
                                Contact Us
                            </Button>
                        </Link>
                    </SheetClose>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
