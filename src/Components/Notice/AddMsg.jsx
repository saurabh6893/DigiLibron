import FormControl from '@mui/material/FormControl'
import { FormGroup } from '@mui/material'
import { Input } from '@mui/material'
import { InputLabel } from '@mui/material'
import { Box } from '@mui/system'
import Navbar from '../HomeData/Navbar'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { addMsg } from './api'
import '../HomeData/Homedata.css'
import { useNavigate } from 'react-router-dom'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
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

const initialValue = {
  name: '',
}

const AddMsg = () => {
  const [ msg, setMsg] = useState(initialValue)
  const { name } =  msg
  const navigate = useNavigate()

  const onValueChange = (e) => {
    console.log(e.target.value)
    setMsg({ ...msg, [e.target.name]: e.target.value })
  }

  const addMsgDetails = async () => {
    await addMsg( msg )
    navigate('/home')
  }
  return (
    <>
      <Navbar />
      <Container>
        <AppBar position='static'>
          <Toolbar className='ATB'>ADD MESSAGES </Toolbar>
        </AppBar>
      <Box sx={{ p: 15, margin: 'auto', maxWidth: 700 }}>
        <FormGroup>
          <Typography variant='h4'>NOTICE BOARD</Typography>
          <FormControl  sx={{ p: 1}}>
            <InputLabel htmlFor='my-input'>MSG</InputLabel>
            <Input
              id='my-input'
              onChange={(e) => onValueChange(e)}
              name='name'
              value={name}
            />
          </FormControl>

          <Button
            variant='contained'
            color='primary'
            onClick={() => addMsgDetails()}
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

export default AddMsg
