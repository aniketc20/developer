import React from 'react'
import Box from '@mui/material/Box';
import linkedInIcon from './images/linkedin.png';
import githubIcon from  './images/github.png'
import instagramIcon from  './images/instagram.png'

import { Avatar, Button } from '@mui/material';
import './App.css';

const Connect = () => {
  return (
    <div className='Connect'>
        
        Let's Connect
        
      <Box sx = {{display: 'flex', justifyContent: 'center', p:2, flexWrap: 'wrap'}}>
        <Button sx= {{p:2, borderRadius: '100%'}} href='https://www.linkedin.com/in/aniket-choudhary-00163517a/'>
            <Avatar src={linkedInIcon}></Avatar>
        </Button>
        <Button sx= {{p:2, borderRadius: '100%'}} href='https://github.com/aniketc20'>
            <Avatar src={githubIcon}></Avatar>
        </Button>
        <Button sx= {{p:2, borderRadius: '100%'}} href='https://www.instagram.com/_a.n.i.k.e.t/?next=%2F'>
            <Avatar src={instagramIcon}></Avatar>
        </Button>
      </Box>
    </div>
  )
}

export default Connect
