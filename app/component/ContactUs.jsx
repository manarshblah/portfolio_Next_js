"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import Image from 'next/image'
import GithubIcon from "../../public/github-icon.svg"
import LinkedinIcon from "../../public/linkedin-icon.svg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const [send, setsend] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_6bl9e6c', 'template_2ycyqxm', form.current, {
                publicKey: 'fsKGUYRulm4L1Yi_5',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setsend(true)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const notify = () => toast("send success ,thanks for your message..!")

    return (
        <>
            <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' id='contact'>
                <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 trnsform -translate-x-1/2 -translate-y-1/2'></div>
                <div className='z-10'>
                    <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
                    <p className='text-[#ADB7BE] mb-4 max-w-md'>
                        I&apos;m currently looking for new opportunities, my inbox is always open.
                        Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>

                    <div className='socials flex flex-row gap-2'>
                        <Link href="https://github.com/manarshblah">
                            <Image
                                src={GithubIcon}
                                alt="GitHub Icon"
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/manar-shblah-217b3226b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <Image
                                src={LinkedinIcon}
                                alt="Linkedin Icon"
                            />
                        </Link>
                    </div>
                </div>
                <div className='z-10'>
                    <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
                        <div className='mb-6'>
                            <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>
                                Your Email
                            </label>
                            <input
                                name='email'
                                type='email'
                                id='email'
                                required
                                placeholder='youremail@gmail.com'
                                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
                                Subject
                            </label>
                            <input
                                name='subject'
                                type='text'
                                id='subject'
                                required
                                placeholder='Just saying hi..!'
                                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            />

                        </div>
                        <div className='mb-6 '>
                            <label
                                htmlFor='message'
                                className='text-white block mb-2 text-sm font-medium'
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                placeholder="Let&apos;s talk about"
                            />

                        </div>
                        <button
                            type='submit'
                            className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full '
                            onClick={notify}
                        >
                            Send Message
                        </button>
                        {send &&
                            <ToastContainer />
                        }
                    </form>
                </div>
            </section>
        </>
    )
};
export default ContactUs