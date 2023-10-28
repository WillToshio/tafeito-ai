import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { NavBarProps } from './NavBar';
import axios from 'axios';

const NavBar = (props:NavBarProps) => {

const [userData, setUserData] = useState<null|{
    nome: string,
    login: string,
    admin: boolean
}>(null);

const {logout} = props;
useEffect(() => {
    axios.get('http://localhost:3001/usuarios/autenticado').then((response) => {
        console.log('xxx', response.data);
        setUserData(response.data.usuario)
    }).catch((error) => {

        setUserData({
            nome: 'usuario',
            login: 'usuario',
            admin: false,
        })
    })
},[])

const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
setAnchorElUser(event.currentTarget);
};

const handleCloseUserMenu = () => {
setAnchorElUser(null);
};


return (
    <AppBar position="static">
    <Container maxWidth="xl">
    <Toolbar disableGutters sx = {{ justifyContent: "space-between"}}>
        <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
        }}>
            <SmartToyIcon sx={{display: 'flex', mr:1}}/>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
            mr: 2,
            display: 'flex' ,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            }}
            >
                TaFeito
            </Typography>

            {userData ? <Typography>Bem vindo: {userData.nome}</Typography> : null}
        </Box>



        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Usuario"  />
            </IconButton>
            </Tooltip>
            <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{ 
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            >
            
            <MenuItem  onClick={logout}>
                <LogoutIcon sx={{display: 'flex', mr:1}}/>
                <Typography textAlign="center">Logout</Typography>
            </MenuItem>
        
            </Menu>
        </Box>
    </Toolbar>
    </Container>
    </AppBar>
    );
}
export default NavBar;