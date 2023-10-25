import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import { CardHeader } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CustomizedCardHeader } from './styles';

const Login = () => {
  return (
    <Box sx = {{
        width: "100%",
        height: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        
      }}
      
      >
      <Card sx={{ maxWidth: 345 }}>
        <CustomizedCardHeader 
          title="Tafeito"
          subheader="Transforme sua ideia em ações"
        />
        <CardContent>
          <Box py={1}>
            <TextField id="username" label="Usuário" variant="filled" fullWidth/>
          </Box>
          <Box py={1}>
            <TextField id="password" label="Senha" variant="filled" fullWidth />
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="contained" fullWidth>Login</Button>
        </CardActions>
      </Card>
    </Box>
    
  );
}

export default Login;