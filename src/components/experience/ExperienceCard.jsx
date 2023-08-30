import React from "react";
import s from "./ExperienceCard.module.css";

const ExperienceCard = ({
    index,
    dateRange,
    title,
    otherTitle = [],
    description,
    tags,
    detectOnHover
}) => {

    return (
        <div
            className={s.root}
            onMouseEnter={() => detectOnHover(index)}
            onFocus={() => detectOnHover(index)}
            onMouseLeave={() => detectOnHover(-1)}
            onBlur={() => detectOnHover(-1)}
        >
            <div className={s.hoverFilter} />
            <div>
                <div className={s.Container}>
                    <div className={s.dateRange}>{dateRange}</div>
                    <div>
                        <div className={s.title}>{title}</div>
                        {otherTitle.map((value) => {
                            return (
                                <div>{value}</div>
                            )
                        })}
                        <div className={s.description}>{description}</div>
                        <div className={s.tags}>
                            {tags.map((value) => {
                                return (
                                    <div className={s.tag}>{value}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard