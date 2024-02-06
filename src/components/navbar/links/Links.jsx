"use client"
import { useState } from "react"
import styles from "./links.module.css"
import NavLink from "./navLink/navLink"
import Image from "next/image"

const links = [
    {
        title:"Home",
        path:"/",
    },
    {
        title:"About",
        path:"/about",
    },
    {
        title:"Contact",
        path:"/contact",
    },
    {
        title:"Posts",/*Blog*/
        path:"/blog",
    },
]
const Links = () => {
    const [open,setOpen] = useState(false)

    const session = true
    const isAdmin = true

    return(
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link=>(
                    <NavLink item={link} key={link.title}/>
                )))}{
                    session?(
                        <>
                        {
                            isAdmin && (
                                <NavLink item = {{title:"Admin",path:"/admin"}}/>
                        )
                    }
                    <button className={styles.logout}>Logout</button>               
                    </>
                    ) : (
                        <NavLink item={{title:"Login",path:"/login"}}/>
                    )
                }
            </div>
            <button className={styles.btnMenu} onClick={()=>setOpen(prev=> !prev)}>
                <Image src="/menu.png" alt="" width={40} height={40}/>
            </button>
            {
                <div className={`${styles.mobileLinks} ${open ? styles.open : ''}`}>
                    {open && links.map((link) => (
                        <NavLink item = {link} key={link.title}/>
                    ))}
                </div>
            }
        </div>
    )
}
export default Links