import React, { useEffect, useState } from "react";
import s from './SubTitle.module.css'

const SubTitle = ({
    data = [{
        title: "Web Developer",
        style: {
            backgroundImage: "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        }
    }, {
        title: "Backend Developer",
        style: {
            backgroundImage: "linear-gradient(to right, orange , yellow, green, cyan, blue, violet)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        }
    }, {
        title: "Full Stask Developer",
        style: {
            backgroundImage: "linear-gradient(to right, blue, cyan, orange , yellow, green, violet)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        }
    }],
    ...otherProps
}) => {

    const [shownData, setShownData] = useState(data[0])
    const [fade, setFade] = useState(false)

    useEffect(() => {
        if (data.length > 1) {
            const interval = setInterval(() => {
                const dataIndex = data.findIndex((value) => value.title === shownData.title)
                if (dataIndex === data.length - 1) {
                    setShownData(data[0])
                } else {
                    setShownData(data[dataIndex + 1])
                }
                setFade(true)
                setTimeout(() => {
                    setFade(false)
                }, 500)
            }, 2000)
            return () => {
                clearInterval(interval)
            }
        }
    }, [data])

    return (
        <h2
            style={{
                ...shownData.style
            }}
            className={`${s.subTitle} ${fade ? s.fadeIn : ''}`}
            {...otherProps}
        >
            {shownData.title}
        </h2>
    )
}

export default SubTitle