import Link from "next/link";
import { Separator } from "./ui/separator";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="sticky bottom-0 left-0 w-full bg-[#05446d] text-white border-t border-companyfg  dark:border-border md:py-0">
            <div className="flex flex-col w-full items-center  justify-between lg:gap-20 md:h-24 py-0 md:py-5 lg:py-0 md:flex-row px-20">
                <div className="hidden md:flex">
                    {/* <div className="text-4xl">Mediverse</div> */}
                    <Image
                        className=""
                        src="/mre.svg"
                        width={120}
                        height={120}
                        alt=""
                    />
                </div>
                <div className="w-full md:w-fit grid grid-cols-1 p-5 lg:p-0 text-center items-center gap-2">
                    <p className="hidden lg:inline">Contact Information</p>
                    <div className="flex flex-row w-full justify-between gap-4">
                        <Link
                            href={
                                "https://mailto" + process.env.NEXT_PUBLIC_CONTACT_MAIL
                            }
                            target="_blank"
                            className="flex flex-row items-center gap-2"
                        >
                            <MdOutlineEmail className="text-xl" />{" "}
                            <p className="hidden lg:inline">{process.env.NEXT_PUBLIC_CONTACT_MAIL}</p>
                        </Link>
                        <Link
                            href={"https://wa.me"}
                            className="flex flex-row items-center gap-2"
                        >
                            <FaWhatsapp className="text-xl" /> 
                            <p className="hidden lg:inline">8494914899</p>
                            

                        </Link>
                        <Link
                            href={process.env.NEXT_PUBLIC_CONTACT_LINKEDIN}
                            target="_blank"
                            className="flex flex-row items-center gap-2"
                        >
                            <FaLinkedinIn className="text-xl" /> 
                            <p className="hidden lg:inline">mediverse
                            research</p>
                            
                        </Link>
                        <Link
                            href={process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM}
                            target="_blank"
                            className="flex flex-row items-center gap-2"
                        >
                            <FaInstagram className="text-xl" /> 
                            <p className="hidden lg:inline">@mediverse</p>
                            
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-row sm:gap-3 gap-5 bg-slate-900 text-white px-5 text-center  items-center justify-center text-[10px] lg:text-sm">
                <p>
                    <span>&#169;</span> by Mediverse Research Experts{" "}
                </p>
                |
                <p>
                    {" "}
                    Developed by{" "}
                    <Link
                        target="_blank"
                        href="https://www.n39labs.com/"
                        className="text-[#0cc0df]"
                    >
                        N39 Labs
                    </Link>
                </p>
                |
                <p>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                </p>
                |
                <p>
                    <Link href="/terms-condition">Terms & Conditions</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
