import Button from '@mui/material/Button'
import Navbar from './HomeData/Navbar'
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
    url("http://images.hellogiggles.com/uploads/2017/05/01011444/picture-of-coffee-and-a-book-photo.jpg")
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

const Adlogin = () => {
  const navigate = useNavigate();
 
  return (
    <>
      <Navbar />
      <Container  sx={{ p: 15, margin: 'auto', maxWidth: 700 }}>
      <Wrapper>
      <Button onClick={() => navigate('/admin')}> ADMIN </Button>
      <Button onClick={() => navigate('/home')}> USER </Button>
      <Box>
        <FormGroup>
          <Typography variant='h4' >LOGIN</Typography>

          <FormControl sx={{ p: 1}}>
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
            onClick={() => navigate('/admin')}
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

export default Adlogin

