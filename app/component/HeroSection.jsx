"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function HeroSection() {
    return (
        <section className="lg:py-16 px-24">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-12"
            >
                <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Hello I&apos;m{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "manar shblah",
                                1000,
                                "Front End Developer",
                                1000,
                                "Web Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl">
                        I&apos;m Manar Shblah, an engineer, and this is my Portfolio. Thanks
                        for your visit.
                    </p>
                    <div>
                        <a href="/images/Manar_Sh.pdf" download="Manar_Sh.pdf">
                            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-10 py-3">
                                    Download CV
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative sm:mt-10">
                        <Image
                            src="/images/hero-image.png"
                            alt="Hero section image of Manar Shblah"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                            priority
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default HeroSection;
