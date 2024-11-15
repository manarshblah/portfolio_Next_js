"use client"
import React from 'react'
import dynamic from 'next/dynamic'
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
  });

const achievementList = [
    {
        metric: "Projects",
        value: "100",
        postfix: "+"
    },
    {
        prefix: "~",
        metric: "Users",
        value: "100,000"
    },
    {
        metric: "Awards",
        value: "10",
    },
    {
        metric: "Years",
        value: "5"
    },
]
const AchievemantSection = () => {

    return (
        <div className='py-8 xl:gap-16 sm:py-16 xl:px-16'>
            <div className='border-[#33353F] border rounded-md lg:py-8 md:py-4 sm:py-3 lg:px-16 md:px-4 sm:px-1 flex flex-row items-center justify-between'>
                {
                    achievementList.map((achievement, index) => {
                        return (
                            <div key={index} className="flex flex-col items-center justify-center lg:mx-4 md:mx-2 sm:mx-0 sm:my-0">
                                <h2 className='text-white lg:text-4xl md:text-2xl sm:text-xl font-bold flex flex-row'>
                                    {achievement.prefix}
                                    <AnimatedNumbers
                                        includeComma
                                        animateToNumber={parseInt(achievement.value)}
                                        local="en-US"
                                        className="text-white lg:text-4xl md:text-2xl sm:text-xl font-bold"
                                        configs={((_, index) => {
                                            return {
                                                mass: 1,
                                                friction: 100,
                                                tensions: 140 * (index + 1)
                                            };
                                        })}
                                    />
                                   {achievement.postfix}
                                </h2>
                                <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AchievemantSection
