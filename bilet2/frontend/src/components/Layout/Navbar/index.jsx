import React from 'react'
import style from "./Navbar.module.scss"
import { Link } from 'react-router-dom'
import { BsTelephoneFill } from "react-icons/bs";


const Navbar = () => {
  return (
    <>
    <div className={style.navbar}>
        <div className={style.image}>
        <div className={style.container}>
            <div className={style.header}>
                <h1>Pulse.</h1>
            </div>

            <div className={style.text}>
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>About us</Link></li>
                    <li><Link>Restaurant</Link></li>
                    <li><Link>News</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
            </div>

            <div className={style.reservation}>
                <p>Reservations</p>
                <BsTelephoneFill />
                <p>652-345 3222 11</p>
            </div>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Navbar