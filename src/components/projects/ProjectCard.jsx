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
    hoverIndex,
    href,
    isEnabledHover
}) => {

    const isHoverFilter = useMemo(() => {
        if (!isEnabledHover) return false
        return hoverIndex !== -1 && hoverIndex === index
    }, [index, hoverIndex])

    const isOtherFilter = useMemo(() => {
        if (!isEnabledHover) return false
        return hoverIndex !== -1 && hoverIndex !== index
    }, [index, hoverIndex])

    return (
        <a
            className={isOtherFilter ? s.helfRoot : s.root}
            href={href}
            target="_blank"
        >
            <div className={isHoverFilter ? s.hoverFilter : ''} />
            <div>
                <div
                    className={s.Container}
                    onMouseEnter={() => detectOnHover(index)}
                    onFocus={() => detectOnHover(index)}
                    onMouseLeave={() => detectOnHover(-1)}
                    onBlur={() => detectOnHover(-1)}
                >
                    {isEnabledHover && (
                        <Image
                            src={image}
                            alt={title}
                            sizes="100vw"
                            width={120}
                            height={0}
                            className={s.img}
                        />
                    )}
                    <div style={{ width: isEnabledHover ? '80%' : '100%' }}>
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
                        {!isEnabledHover && (
                            <Image
                                src={image}
                                alt={title}
                                sizes="100vw"
                                width={200}
                                height={0}
                                className={s.img}
                            />
                        )}
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