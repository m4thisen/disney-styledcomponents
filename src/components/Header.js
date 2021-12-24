import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <>
        <Adver>THIS IS A STUDY CASE PROYECT, IS NOT THE ORIGINAL PAGE</Adver>
        <Nav>
            <Logo src="/images/logo.svg" alt='logo disney'/>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" alt='h'/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt='s'/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt='s'/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt='s'/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt='s'/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt='s'/>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="https://pbs.twimg.com/profile_images/1323458538614784004/fOsMYBrH_400x400.jpg" />
        </Nav>
        </>
    )
}

export default Header

const Adver = styled.div`
    background-color: red;
    text-align: center;
`

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x:hidden;
`
const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 30px;
    aling-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height: 20px;
        }

        span{
            font-size:13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content:"";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform-origin: left center;
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`