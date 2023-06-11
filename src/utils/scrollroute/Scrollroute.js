import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import style from "./ScrollRoute.module.scss"

function ScrollRoute({ routeName }) {
    const [navRoute, setNavRoute] = useState([])
    const [navIndex, setNavIndex] = useState(0)
    const [color, setColor] = useState(false)
    const navData = [
        {
            id: 1,
            nav_title: "Banner",
            route: "banner"
        },
        {
            id: 2,
            nav_title: "Video",
            route: "video"
        },
        {
            id: 3,
            nav_title: "Case",
            route: "case"
        },
        {
            id: 4,
            nav_title: "Team",
            route: "team"
        },
        {
            id: 5,
            nav_title: "Faq",
            route: "faq"
        },
        {
            id: 6,
            nav_title: "Footer",
            route: "footer"
        },
        {
            id: 7,
            nav_title: "Banner",
            route: "casebanner"
        },
        {
            id: 8,
            nav_title: "Collection",
            route: "casecollection"
        },
        {
            id: 9,
            nav_title: "Caseselection",
            route: "caseselection"
        },
        {
            id: 10,
            nav_title: "CaseFaq",
            route: "casefaq"
        },

        {
            id: 11,
            nav_title: "Footer",
            route: "casefooter"
        },
        {
            id: 12,
            nav_title: "Banner",
            route: "servicebanner"
        },
        {
            id: 13,
            nav_title: "service works",
            route: "serviceworks"
        },
        {
            id: 14,
            nav_title: "case",
            route: "servicecase"
        },
        {
            id: 15,
            nav_title: "faq",
            route: "servicefaq"
        },
        {
            id: 16,
            nav_title: "footer",
            route: "servicefooter"
        },
    ];

    // console.log(navData.slice(11, 14))
    useEffect(() => {
        switch (routeName) {
            case "banner":
                setNavRoute(navData.slice(0, 3))
                setNavIndex(0)
                break;
            case "video":
                setNavRoute(navData.slice(0, 3))
                setNavIndex(1)
                break;
            case "case":
                setNavRoute(navData.slice(1, 4))
                setNavIndex(1)
                break;
            case "team":
                setNavRoute(navData.slice(2, 5))
                setNavIndex(1)
                setColor("black")
                break;
            case "faq":
                setNavRoute(navData.slice(3, 6))
                setNavIndex(1)
                break;
            case "footer":
                setNavRoute(navData.slice(3, 6))
                setNavIndex(2)
                // setColor("black")
                break;
            case "casebanner":
                setNavRoute(navData.slice(6, 9))
                setNavIndex(0)
                // setColor("black")
                break;
            case "casecollection":
                setNavRoute(navData.slice(6, 9))
                setNavIndex(1)
                setColor("black")
                break;
            case "caseselection":
                setNavRoute(navData.slice(7, 10))
                setNavIndex(1)
                // setColor("black")
                break;
            case "casefaq":
                setNavRoute(navData.slice(8, 11))
                setNavIndex(1)
                setColor("black")
                break;
            case "casefooter":
                setNavRoute(navData.slice(8, 11))
                setNavIndex(2)
                // setColor("black")
                break;
            case "servicebanner":
                setNavRoute(navData.slice(11, 14))
                setNavIndex(0)
                // setColor("black")
                break;
            case "serviceworks":
                setNavRoute(navData.slice(11, 14))
                setNavIndex(1)
                setColor("black")
                break;
            case "servicecase":
                setNavRoute(navData.slice(12, 15))
                setNavIndex(1)
                // setColor("black")
                break;
            case "servicefaq":
                setNavRoute(navData.slice(13, 16))
                setNavIndex(1)
                setColor("black")
                break;
            case "servicefaq":
                setNavRoute(navData.slice(13, 16))
                setNavIndex(2)
                // setColor("black")
                break;
            case "servicefooter":
                setNavRoute(navData.slice(13, 16))
                setNavIndex(2)
                // setColor("black")
                break;
        }
    }, [routeName])
    return (
        <div className={style.rounds}>
            <ul>
                {navRoute?.map((nav, inx) => (
                    <li key={inx} >
                        <Link style={(inx === navIndex && color) ? { border: "1px solid black" } : ""} className={`${inx === navIndex ? style.activeclass : ""} ${color ? style.bgColorWhite : ""}`} to={nav.route} spy={true} smooth={true} offset={0} duration={500} >
                        </Link>
                    </li>
                ))}
            </ul>

        </div >
    )
}


export default ScrollRoute