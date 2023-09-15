'use client';
import React, { useState } from "react";
import ExperienceCard from './ExperienceCard'

const Experience = () => {

    const [hoverIndex, setHoverIndex] = useState(-1)

    const data = [{
        dateRange: "2022 - PRESENT",
        title: "Web Developer · Shopage",
        description: "During my tenure as a full stack developer at Shopage, I had the opportunity to work on an exciting e-commerce platform that provided comprehensive services for individuals looking to establish their online shops. My primary responsibilities included bug fixing and implementing new features using React and Django.",
        tags: ['React', 'SCSS', 'Javascript', 'Python', 'Django'],
        href: "https://shopage.org/"
    }]

    const detectOnHover = (index) => {
        setHoverIndex(index)
    }

    return (
        <div>
            {data.map((value, index) => {
                return (
                    <ExperienceCard
                        key={value.title}
                        index={index}
                        dateRange={value.dateRange}
                        title={value.title}
                        otherTitle={value.otherTitle}
                        description={value.description}
                        tags={value.tags}
                        detectOnHover={(index) => detectOnHover(index)}
                        hoverIndex={hoverIndex}
                        href={value.href}
                    />
                )
            })}
        </div>
    )
}

export default Experience