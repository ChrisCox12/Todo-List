import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function CustNavbar() {
    return (
        <div>
            <Navbar sticky='top' bg='dark' variant='dark' expand='sm' collapseOnSelect>
                <Container>
                    <Navbar.Toggle  aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/task-list'>Tasks</Nav.Link>
                            <Nav.Link href='/create-task'>Create New Task</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container> 
            </Navbar>
        </div>
    )
}

export default CustNavbar
