import Button from '@mui/material/Button'
import Navbar from '../Components/HomeData/Navbar'
import FormControl from '@mui/material/FormControl'
import { FormGroup } from '@mui/material'
import { Input } from '@mui/material'
import { InputLabel } from '@mui/material'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import '../Components/HomeData/Homedata.css'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 86vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://static2.srcdn.com/wordpress/wp-content/uploads/2020/02/Books-Feat-Image.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
 
`;

const Login = () => {
  const navigate = useNavigate();
 
  return (
    <>
      <Navbar />
      <Container sx={{ p: 15, margin: 'auto', maxWidth: 700 }}>
      <Wrapper>
      <Button onClick={() => navigate('adlogin')}> LOGIN </Button>
      <Box >
        <FormGroup>
          <Typography variant='h4' >NEW USER</Typography>
          <FormControl  sx={{ p: 1}}>
            <InputLabel htmlFor='my-input'>NAME</InputLabel>
            <Input
              id='my-input'
            />
          </FormControl>

          <FormControl  sx={{ p: 1}}>
            <InputLabel htmlFor='my-input'>UNIVERSITY NUMBER</InputLabel>
            <Input
              id='my-input'  
            />
             </FormControl> 
          
          <FormControl  sx={{ p: 1}}>
            <InputLabel htmlFor='my-input'>EMAIL</InputLabel>
            <Input
              id='my-input'   
            />
          </FormControl> 

          <FormControl  sx={{ p: 1}}>
            <InputLabel htmlFor='my-input'>PASSWORD</InputLabel>
            <Input
              id='my-input'
            />
          </FormControl> 
        
          <Button
            variant='contained'
            color='primary'
            >
            {' '}
            LOGIN{' '}
          </Button>
         
        </FormGroup>
      </Box>
      
      </Wrapper>
      </Container>
    </>
  )
}

export default Login

