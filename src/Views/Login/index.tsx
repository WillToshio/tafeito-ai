import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import { CardHeader } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { CustomizedCardHeader } from './styles';

const Login = () => {
  const [isButtonActive, setIsButtonActive] = useState(true);
  const [username, setUsername] = useState<string|null>(null);
  const [password, setPassword] = useState<string|null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMesssage, setErrorMessage] = useState<string|null>(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const postLogin = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        login: username,
        password: password
      })
    }
    setErrorMessage('')
    fetch('http://localhost:3000/usuarios/login', requestOptions)
      .then(async (response) => {
        const dataResponse = await response.json()
        return {
          responseStatus: response.status,
          data: dataResponse,
        }
      })
      .then(data => {
        console.log('success', JSON.stringify(data))
        console.log(data)
        if(data.responseStatus === 402 && data.data?.mensagem){
          setErrorMessage(data.data?.mensagem)
        } 
        else if(data.responseStatus === 400 && data.data?.mensagem){
          setErrorMessage('Requisição inválida')
        }
        else if(data.responseStatus === 200 && data.data?.mensagem){
          setErrorMessage('Requisição válida')
        }
      })
      .catch(error => setErrorMessage('Erro no servidor, tente novamente mais tarde'));
  }
  useEffect(() => {
      if(username !== null 
        && username !== '' 
        && password !== null
        && password !== ''){
          setIsButtonActive(false);
        }else{
          setIsButtonActive(true);
        }
  }, [username, password]);
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
            <TextField 
            onChange={(newValue) => {
              setUsername(newValue.target.value);
            }}
            id="username" 
            label="Usuário"
            variant="filled" 
            fullWidth/>
          </Box>
          <Box py={1}>
            <FormControl 
                fullWidth variant="filled">
              <InputLabel htmlFor="password">Senha</InputLabel>
              <FilledInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                  </InputAdornment>
                }
                onChange={(newValue) => {
                  setPassword(newValue.target.value);
                }}
                fullWidth
              />
            </FormControl>
          </Box>
        </CardContent>
        <CardActions>
          <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Box>
            {errorMesssage &&  <Typography color={"red"}>
            {errorMesssage}
            </Typography>
            }
          </Box>
          <Box sx={{
            width: '100%'
              }}>
            <Button sx={{

            }}
            onClick={ postLogin }
            disabled={isButtonActive} variant="contained" fullWidth>Login</Button>
          </Box>
          </Box>
        </CardActions>
      </Card>
    </Box>
    
  );
}

export default Login;