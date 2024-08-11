'use client';
import React, { useState } from "react";
import ProjectCard from './ProjectCard'

const Project = ({
    isEnabledHover
}) => {

    const [hoverIndex, setHoverIndex] = useState(-1)

    const data = [{
        image: "https://diy-system.s3.us-west-1.amazonaws.com/low/2e0d0316-d2b4-44ca-aaeb-bd5c73b65291_1693415929058.725.png",
        title: "Build E-commerce Web Site",
        description: "I developed a comprehensive e-commerce website that encompasses all aspects of the online shopping experience. This includes a fully functional member system with exclusive discounts, and a secure credit card checkout process powered by Stripe. By integrating these features, I created a user-friendly platform that enables customers to browse, purchase.",
        tags: ['Nextjs', 'React', 'SCSS', 'Javascript'],
        href: "https://github.com/arthurHui/ecommerce_website"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8_4boBjMzRFpBc0JNSaFt-E2eWMtG5VfXw&usqp=CAU",
        title: "Django Server",
        description: "I developed a Django server using django restful framework. It provide a API for frontend to do CRUD in the database",
        tags: ['Python', 'Django', 'MySQL'],
        href: "https://github.com/arthurHui/ecommerce_django_server"
    },
    {
        image: "https://diy-system.s3.us-west-1.amazonaws.com/low/4dafabb4-05c2-4a2f-b6c7-948f9c4e0c9a_1705325145843.1548.png",
        title: "Date Picker Package",
        description: "The date picker component you created is a user interface element designed to enable users to select a specific date from a calendar-like interface. It is built using the React framework, which allows for a modular and reusable design.",
        tags: ['React', 'NPM', 'Date-Picker'],
        href: "https://www.npmjs.com/package/react-alldate-picker"
    }]

    const detectOnHover = (index) => {
        if (!isEnabledHover) return
        setHoverIndex(index)
    }

    return (
        <>
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
                        isEnabledHover={isEnabledHover}
                    />
                )
            })}
        </>
    )
}

export default Project