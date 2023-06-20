import React, { Fragment, useEffect, useState } from 'react'
import '../../styles/header.scss'
import Navbar from 'react-bootstrap/Navbar'
import { Nav , Container } from 'react-bootstrap'
function Header({sections}) {
    const [nav , setNav] = useState(false);
    const [url , setUrl] = useState(false);
    const [list , setList] = useState(false);
    const [link , setLink] = useState(1);
    
    const myLinks = sections.map((section) => {
        const activeLink = () => {
            setLink(section.id)
        }

        return(
            <Nav.Link 
                className={`${list ? 'change' : 'list'} ${link === section.id ? 'active' : 'link'}`}
                onClick={activeLink}
                href={section.Id} key={section.id}> {section.name}
            </Nav.Link>
        )
    })

    //handel header
    const changBackground = () => {
        if(window.scrollY >= 10){
            setNav(true);
            setUrl(true);
            setList(true);
        }else{
            setNav(false);
            setUrl(false);
            setList(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll' , changBackground);
    })

    return (
        <Fragment>
            <Navbar expand="lg" className= {nav ? 'nav-background' : 'nav'}>
                <Container>
                    <Navbar.Brand href="#">
                        <img src={url ? "/images/logo-dark.png" : "/images/logo-light.png"} alt='logo__img'/ >
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-3 my-lg-0 font-load" style={{ maxHeight: '300px' }} navbarScroll>
                            {myLinks}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Header;





