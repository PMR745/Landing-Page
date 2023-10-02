import React, { useContext, useState } from 'react'
import SiteContext from '../Context/SiteContext';

export const AddLink = () => {

    const stateContext = useContext(SiteContext);
    const [toggle, setToggle] = useState(false);
    const [siteName, setSiteName] = useState('');
    const [siteURL, setSiteURL] = useState('');

    const handleClick = () => {
        setToggle(!toggle)
    }

    const handleAddClick = () => {
        setToggle(!toggle);
        stateContext.addSites(siteName, siteURL);
    }

    if (toggle) {
        return (
            <div className='linkElement' >
                <div className="iconBg flex addLink">
                    +
                </div>
                Add Site
                <div className="addBox">
                    <div className="boxTitle">
                        Add Site
                    </div>
                    <div className="siteName">
                        <span>Name</span>
                        <input type="text" placeholder='Website Name' onChange={(e) => setSiteName(e.target.value)} />
                    </div>
                    <div className="siteURL">
                        <span>URL</span>
                        <input type="text" placeholder='Website URL' onChange={(e) => setSiteURL(e.target.value)} />
                    </div>
                    <div className="btns">
                        <button onClick={handleClick}>Cancel</button>
                        <button onClick={handleAddClick}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='linkElement' onClick={handleClick}>
                <div className="iconBg flex addLink">
                    +
                </div>
                Add Site
            </div>
        )
    }
}
