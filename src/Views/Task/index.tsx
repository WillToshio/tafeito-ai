import * as React from 'react';
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
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Provider/authProvider';
import NavBar from '../../Components/NavBar';

const Task = () => {
  
  const { setToken } = useAuth();
  const navigate = useNavigate();


  const logout = () => {
    setToken(null);
    navigate('/login',{replace: true});
  }; 

  return (
    <NavBar logout={ logout } />
  );
}
export default Task;