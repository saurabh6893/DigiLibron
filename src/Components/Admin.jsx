import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { makeStyles } from '@mui/styles'
import Toolbar from '@mui/material/Toolbar'
import { NavLink } from 'react-router-dom'
import { Stack } from '@mui/material'
import '../Components/HomeData/Homedata.css'
import Navbar from './HomeData/Navbar'
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
`;

const useStyle = makeStyles({
  header: {
    background: 'linear-gradient(45deg, #000000 30%, #FF8E53 50%)',
  },
  tabs: {
    color: 'black',
    marginRight: 20,
    textDecoration: 'none',
    fontSize: 30,
  },
  tabbs: {
    color: 'white',
    marginRight: 20,
    textDecoration: 'none',
    fontSize: 30,
  },
})

const Admin = () => {
  
  const classes = useStyle()
  return (
    <>
    <Navbar/>
      <Container>
      <Stack spacing={7}>
        <AppBar position='static'>
          <Toolbar className='ATB'>The-Admins-Den</Toolbar>
        </AppBar>

        <AppBar position='static' className='upload'>
          NOTICE BOARD
          <Toolbar className='tbx'>
            <NavLink className={classes.tabs} to='all' exact>
              ALL MESSAGES
            </NavLink>
            <NavLink className={classes.tabs} to='add' exact>
              ADD MESSAGES
            </NavLink>
          </Toolbar>
        </AppBar>
      
     

      <AppBar position='static' className='upload'>
        UPLOAD BOOKS
        <Toolbar className='tbx'>
          <NavLink className={classes.tabs} to='/upload1' exact>
            UPLOAD
          </NavLink>
          <NavLink className={classes.tabs} to='/home' exact>
            HOME 
          </NavLink>
        </Toolbar>
      </AppBar>
      </Stack>
      </Container>
    </>
  )
}

export default Admin
