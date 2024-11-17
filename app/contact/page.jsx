"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
// import { info } from "@/lib/utils";
import "react-phone-input-2/lib/style.css";
import React from "react";
import { PhoneInput } from "@/components/PhoneInput";
const contact = () => {
    const [state, handleSubmit, reset] = useForm("mjkblwyo");

    if (state.succeeded) {
        <div>
            <h1>Contact Us</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur, maxime aliquid. Eius, ducimus corrupti
                exercitationem dolores atque eos cumque, accusantium rem fugiat
                modi aliquid unde maiores, asperiores ratione dolore odit.
            </p>
        </div>;
    }

    return (
        <section className="herobg h-screen py-10 flex flex-col justify-center items-center">
            <div className="w-fit lg:w-[50%] px-5">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:h-[50%] order-2 xl:order-none">
                        <form
                            className="flex flex-col gap-6 p-10 text-black bg-companyfg rounded-xl border-2 border-companybg"
                            onSubmit={handleSubmit}
                            method="POST"
                        >
                            <h3 className="text-4xl ">Contact Us</h3>
                            <p className="">
                                If you're interested in collaborating or have an
                                opportunity that aligns with my expertise, I'd
                                love to hear from you! Whether you’re a
                                potential employer, client, or just someone with
                                a question, feel free to drop me a message.
                                Let’s connect and explore how we can work
                                together to create something impactful.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    id="firstname"
                                    type="firstname"
                                    name="firstname"
                                    placeholder="Firstname"
                                    required
                                    className="border border-black"
                                />
                                <Input
                                    id="lastname"
                                    type="lastname"
                                    name="lastname"
                                    placeholder="Lastname"
                                    required
                                    className="border border-black"
                                />
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                    className="border border-black"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />

                                <PhoneInput
                                    id="phone"
                                    type="phone"
                                    name="phone"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <Input
                                className="border border-black"
                                id="emailsubject"
                                type="emailsubject"
                                name="emailsubject"
                                placeholder="Email Subject"
                                required
                            />
                            <Textarea
                                id="emailbody"
                                name="emailbody"
                                className="h-[150px] border border-black"
                                placeholder="Type your message here."
                                required
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />

                            <div className="w-full flex items-center justify-center">
                                <Button
                                    size="md"
                                    className="h-[48px] w-[50%]"
                                    disabled={state.submitting}
                                >
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default contact;
