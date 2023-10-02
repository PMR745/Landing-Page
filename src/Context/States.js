import SiteContext from "./SiteContext";
import React, { useEffect, useState } from "react";

const States = (props) => {
    const state = {
        "name": "PMR",
        "age": 20
    }

    const [sites, setSites] = useState(localStorage.sites ? JSON.parse(localStorage.sites) : [])

    const addSites = (name, url) => {
        const obj = {
            name: name,
            url: url

        }
        setSites([...sites, obj]);
    }

    useEffect(() => {
        localStorage.setItem("sites", JSON.stringify(sites));
    }, [sites])

    return (
        <SiteContext.Provider value={{ state, addSites, sites }}>
            {props.children}
        </SiteContext.Provider>
    )
}

export default States;