'use client';
import React from "react";
import ExperienceCard from './ExperienceCard'

const Experience = () => {

    const data = [{
        dateRange: "2022 - PRESENT",
        title: "Web Developer · Shopage",
        description: "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
        tags: ['React', 'SCSS', 'Javascript', 'Python', 'Django']
    }]

    const detectOnHover = (index) => {
        console.log('index', index)
    }

    return (
        <div>
            {data.map((value, index) => {
                return (
                    <ExperienceCard
                        index={index}
                        dateRange={value.dateRange}
                        title={value.title}
                        otherTitle={value.otherTitle}
                        description={value.description}
                        tags={value.tags}
                        detectOnHover={(index) => detectOnHover(index)}
                    />
                )
            })}
        </div>
    )
}

export default Experience