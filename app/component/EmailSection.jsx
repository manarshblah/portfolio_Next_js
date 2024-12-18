"use client"
import React from 'react'
import GithubIcon from "../../public/github-icon.svg"
import LinkedinIcon from "../../public/linkedin-icon.svg"
import Link from 'next/link'
import Image from 'next/image'
import { useForm, ValidationError } from '@formspree/react';

const EmailSection = () => {
    const [state, handleSubmit] = useForm("myzygzea");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    const handelsubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        console.log(data)

    }

    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 trnsform -translate-x-1/2 -translate-y-1/2'></div>
            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href="github.com">
                        <Image
                            src={GithubIcon}
                            alt="GitHub Icon"
                        />
                    </Link>
                    <Link href="linkedin.com">
                        <Image
                            src={LinkedinIcon}
                            alt="Linkedin Icon"
                        />
                    </Link>
                </div>
            </div>
            <div className='z-10'>
                <form className='flex flex-col' onSubmit={handleSubmit}>
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
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
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

                        <ValidationError
                            prefix="subject"
                            field="subject"
                            errors={state.errors}
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
                            placeholder="Let's talk about"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full '
                        disabled={state.submitting}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default EmailSection
