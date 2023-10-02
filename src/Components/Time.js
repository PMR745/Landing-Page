import React, { useEffect, useState } from 'react'

export const Time = () => {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)
        }
    })
    return (
        <div className='dateTime flex'>
            <span className="time">
                <p>Time</p>
                {date.toLocaleTimeString()}
            </span>

            <span className="date">
                <p>Date</p>
                {date.getDate() + ' - ' + (date.getMonth() + 1) + ' - ' + date.getFullYear()}
            </span>
        </div>

    )
}
