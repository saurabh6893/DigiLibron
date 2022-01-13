import Navbar from '../Components/HomeData/Navbar'
import FormControl from '@mui/material/FormControl'
import { FormGroup } from '@mui/material'
import { Input } from '@mui/material'
import { InputLabel } from '@mui/material'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import '../Components/HomeData/Homedata.css'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 86vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url("https://www.neh.gov/sites/default/files/styles/featured_image_page/public/2018-06/openbooks.jpg?h=b69e0e0e&itok=06BUz0mY")
      center;
`;

const Upload = () => {

  const navigate = useNavigate() 
  
  return (
    <>
      <Navbar />
      <Container>
      <Box sx={{ p: 15, margin: 'auto', maxWidth: 700 }}>
        <FormGroup>
          <Typography variant='h4' >UPLOAD BOOKS</Typography>
          <FormControl sx={{ p: 1}}>
            <InputLabel htmlFor='my-input'>BOOK NAME</InputLabel>
            <Input
              id='my-input'
            />
          </FormControl>

          <FormControl sx={{ p: 1}}>
            <InputLabel htmlFor='my-input'>DEPARTMENT</InputLabel>
            <Input
              id='my-input' 
            />
          </FormControl> 
          
          <FormControl sx={{ p: 1}}>
            <InputLabel htmlFor='my-input'>AUTHOR</InputLabel>
            <Input
              id='my-input'
            />
          </FormControl> 

          <Button
            variant='contained'
            color='primary'
            style={{ marginBottom: 10 }}
            onClick={() => navigate('pdf')}
          >
            {' '}
            UPLOAD{' '}
          </Button>
          
          <Button
            variant='contained'
            color='primary' 
          >
            {' '}
            ADD{' '}
          </Button>
        
        </FormGroup>
      </Box>
      </Container>
    </>
  )
  }

export default Upload
