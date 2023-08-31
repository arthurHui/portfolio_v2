import Image from 'next/image'
import React, { useMemo } from "react";
import s from "./ProjectCard.module.css";
import { LeftTopArrow } from '@/components/icon'

const ProjectCard = ({
    index,
    image,
    title,
    otherTitle = [],
    description,
    tags,
    detectOnHover,
    hoverIndex
}) => {

    const isHoverFilter = useMemo(() => {
        return hoverIndex !== -1 && hoverIndex === index
    }, [index, hoverIndex])

    const isOtherFilter = useMemo(() => {
        return hoverIndex !== -1 && hoverIndex !== index
    }, [index, hoverIndex])

    return (
        <a
            className={isOtherFilter ? s.helfRoot : s.root}
            onMouseEnter={() => detectOnHover(index)}
            onFocus={() => detectOnHover(index)}
            onMouseLeave={() => detectOnHover(-1)}
            onBlur={() => detectOnHover(-1)}
            href="https://shopage.org/"
            target="_blank"
        >
            <div className={isHoverFilter ? s.hoverFilter : ''} />
            <div>
                <div className={s.Container}>
                    <Image
                        src={image}
                        alt={title}
                        sizes="100vw"
                        width={120}
                        height={0}
                        className={s.img}
                    />
                    <div>
                        <div
                            className={s.title}
                            style={{ color: isHoverFilter ? '#5EE4D4' : 'inherit' }}
                        >
                            {title}
                            <LeftTopArrow
                                className={s.leftTopArrow}
                            />
                        </div>
                        {otherTitle.map((value) => {
                            return (
                                <div key={value}>{value}</div>
                            )
                        })}
                        <div className={s.description}>{description}</div>
                        <div className={s.tags}>
                            {tags.map((value) => {
                                return (
                                    <div key={value} className={s.tag}>{value}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default ProjectCard