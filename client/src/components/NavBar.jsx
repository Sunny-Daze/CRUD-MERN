import { AppBar, Toolbar, styled} from '@mui/material'
import {NavLink } from 'react-router-dom'
import './NavBar.css'

const Header = styled(AppBar)`
    background: #111111
`
const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 50px;
    color: inherit;
    text-decoration: none;
`

const NavBar = () => {
    return(
        <>
            <Header position='static'>
                <Toolbar>
                    <Tabs to='/' >CRUD using MERN stack</Tabs>
                    <Tabs to='/allusers' >All Users</Tabs>
                    <Tabs to='/adduser'>Add User</Tabs>
                </Toolbar>
            </Header>
        </>
    )
}

export default NavBar