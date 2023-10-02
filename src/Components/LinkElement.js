import React from 'react'

export const LinkElement = (props) => {
    const url = props.url;
    const domain = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[1];
    console.log("Domain: " + domain)
    const imgUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`

    return (
        <a href={props.url}>
            <div className='linkElement'>
                <div className="iconBg flex">
                    <img src={imgUrl} alt="" />
                </div>
                {props.name}
            </div>
        </a>
    )
}
