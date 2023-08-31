'use client';
import React, { useState } from "react";
import ProjectCard from './ProjectCard'

const Project = () => {

    const [hoverIndex, setHoverIndex] = useState(-1)

    const data = [{
        image: "https://diy-system.s3.us-west-1.amazonaws.com/low/2e0d0316-d2b4-44ca-aaeb-bd5c73b65291_1693415929058.725.png",
        title: "Build a E-commerce Web Site",
        description: "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
        tags: ['Nextjs','React', 'SCSS', 'Javascript', 'Python', 'Django']
    }]

    const detectOnHover = (index) => {
        setHoverIndex(index)
    }

    return (
        <div>
            {data.map((value, index) => {
                return (
                    <ProjectCard
                        key={value.title}
                        index={index}
                        title={value.title}
                        otherTitle={value.otherTitle}
                        description={value.description}
                        tags={value.tags}
                        detectOnHover={(index) => detectOnHover(index)}
                        hoverIndex={hoverIndex}
                        image={value.image}
                    />
                )
            })}
        </div>
    )
}

export default Project