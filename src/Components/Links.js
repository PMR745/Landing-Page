import React, { useContext } from 'react'
import { LinkElement } from './LinkElement'
import { AddLink } from './AddLink'
import SiteContext from '../Context/SiteContext'

export const Links = () => {
    const stateContext = useContext(SiteContext)
    const state = [
        {
            sname: "a",
            surl: "a.com"
        },
        {
            sname: "b",
            surl: "b.com"
        }
    ]

    return (
        <div className='links flex'>
            <ul className='flex'>
                {stateContext.sites.map((site, index) => (
                    < LinkElement key={index} name={site.name} url={site.url} />
                ))}
                <AddLink />
            </ul>
        </div>
    )
}
