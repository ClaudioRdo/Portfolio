import React from 'react'
import {NavLink} from 'react-router-dom'
import { BsGoogle, BsGithub, BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";
import styled from 'styled-components';

const ListIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 3rem;

    z-index: 3;

    &>*:not(:last-child){
        margin: 0.5rem 0;
    }
`

const Line = styled.span`
    width: 2px;
    height: 8rem;
    background-color: #E7DFDD;
`
const SocialIcons = () => {

    return (
        <ListIcons>

            <IconContext.Provider value={{ size: '2em' }}>
                <NavLink to='' target='_blank' style={{color:'#E7DFDD'}}>
                    <BsGithub />
                </NavLink>
            </IconContext.Provider>

            <IconContext.Provider value={{ size: '2em' }}>
                <NavLink to={{pathname:'https://'}} target='_blank' style={{color:'#E7DFDD'}}>
                    <BsGoogle />
                </NavLink>
            </IconContext.Provider>

            <IconContext.Provider value={{ size: '2em' }}>
                <NavLink to='' target='_blank' style={{color:'#E7DFDD'}}>
                    <BsLinkedin />
                </NavLink>
                
            </IconContext.Provider>
            <Line />
        </ListIcons>

    )
}

export default SocialIcons