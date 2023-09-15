import React, { useMemo } from "react";
import s from "./ExperienceCard.module.css";
import { LeftTopArrow } from '@/components/icon'

const ExperienceCard = ({
    index,
    dateRange,
    title,
    otherTitle = [],
    description,
    tags,
    detectOnHover,
    hoverIndex,
    href
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
            href={href}
            target="_blank"
        >
            <div className={isHoverFilter ? s.hoverFilter : ''} />
            <div>
                <div className={s.Container}>
                    <div className={s.dateRange}>{dateRange}</div>
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

export default ExperienceCard