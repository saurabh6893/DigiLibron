import FormControl from '@mui/material/FormControl';
import { FormGroup } from '@mui/material';
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getMsgs } from './api';
import { editMsg } from './api';
import Navbar from '../HomeData/Navbar';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
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
  name: ''
  
}

const EditMsg = () => {
    const [msg, setMsg] = useState(initialValue);
    const { name } = msg;
    const { id } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        const loadMsgData = async() => {
            const response = await getMsgs(id);
            setMsg(response.data);
        }
        loadMsgData();
    },[id]);

    

    const onValueChange = (e) => {
        console.log(e.target.value);
        setMsg({...msg, [e.target.name]: e.target.value})
    }

    const editMsgDetails = async () => {
        await editMsg(id,msg);
        navigate('/home');
    }
    
    return ( 
         <>
        <Navbar />
        <Container>
        <AppBar position='static'>
          <Toolbar className='ATB'>EDIT MESSAGES </Toolbar>
        </AppBar>
        <Box sx={{p: 15, margin: 'auto', maxWidth: 700,  }}>
            
        <FormGroup  sx={{ p: 1}}>
        <Typography variant="h4">Edit </Typography>
        <FormControl >
        <InputLabel htmlFor="my-input">MSG</InputLabel>
        <Input id="my-input" onChange={(e) => onValueChange(e)} name='name' value={name} />
        </FormControl>
      <Button variant="contained" color="primary" onClick={() => editMsgDetails()}> EDIT</Button>
      </FormGroup>
    
      </Box>
      </Container>
      </>
    )
}

export default EditMsg;