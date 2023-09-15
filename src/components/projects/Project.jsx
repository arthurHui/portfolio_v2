'use client';
import React, { useState } from "react";
import ProjectCard from './ProjectCard'

const Project = () => {

    const [hoverIndex, setHoverIndex] = useState(-1)

    const data = [{
        image: "https://diy-system.s3.us-west-1.amazonaws.com/low/2e0d0316-d2b4-44ca-aaeb-bd5c73b65291_1693415929058.725.png",
        title: "Build E-commerce Web Site",
        description: "I developed a comprehensive e-commerce website that encompasses all aspects of the online shopping experience. This includes a fully functional member system with exclusive discounts, and a secure credit card checkout process powered by Stripe. By integrating these features, I created a user-friendly platform that enables customers to browse, purchase.",
        tags: ['Nextjs','React', 'SCSS', 'Javascript', 'Python', 'Django'],
        href: "https://www.hkwarmhome.com"
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
                        href={value.href}
                    />
                )
            })}
        </div>
    )
}

export default Project