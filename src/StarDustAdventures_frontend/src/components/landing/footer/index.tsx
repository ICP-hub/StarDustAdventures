/*
    * This file contains the footer component for the landing page.
    * The footer contains the social media icons.
    * The social media icons are stored in the SOCIAL_ICONS {@code Array}.
    * The icons are displayed using the map function.
    * The type of SOCIAL_ICONS is defined as Socials.
    * @author @ArjunQBTech
    * @version 1.0
*/
import React from 'react';
import { FaXTwitter, FaDiscord, FaTelegram  } from "react-icons/fa6";
import './index.css';


type Socials = {
    name: string;
    icons: React.FC;
}

const SOCIAL_ICONS = [
    {name:'discord', icons:FaDiscord},
    {name:'telegram', icons:FaTelegram},
    {name:'twitter', icons:FaXTwitter},
] as Socials[]


const Footer = ()=>{
    return(
        <footer className='footer'>
            <p className='footer-text'>All rights reserved @startdustadventures</p>
            <div className='social-icons-container'>
                <p className='social-icons-container-text'>Follow us on</p>
                <div className='social-icons'>
                    {SOCIAL_ICONS.map((icon, index)=>{
                        const {name, icons : Icons} = icon
                        return(
                            <Icons key={name}/>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer;