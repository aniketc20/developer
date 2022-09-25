import React from 'react'
import './App.css';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          mx: 2,
        }}
        {...other}
      />
    );
  }
const Skills = () => {
  return (
    <div className='About'>
      
        <Box sx = {{display: 'flex', justifyContent: 'center', p:2, flexWrap: 'wrap'}}>
        Techstack:
            <Item>
                <Button variant="contained" sx={{bgcolor: '#DF9110'}}>
                    Java
                </Button>
            </Item>
            <Item>
                <Button variant="contained" sx={{bgcolor: '#DF9110'}}>
                    Python
                </Button>
            </Item>
            <Item>
                <Button variant="contained" sx={{bgcolor: '#DF9110'}}>
                    C++/C
                </Button>
            </Item>
            <Item>
                <Button variant="contained" sx={{bgcolor: '#DF9110'}}>
                    Django
                </Button>
            </Item>
            <Item>
                <Button variant="contained" sx={{bgcolor: '#DF9110'}}>
                    Spring Boot
                </Button>
            </Item>
            <Item>
                <Button variant="contained" sx={{bgcolor: '#DF9110'}}>
                    React Js
                </Button>
            </Item>
            <Item>
                <Button variant="contained" sx={{bgcolor: '#DF9110'}}>
                    Vue Js
                </Button>
            </Item>
            <Item>
                <Button variant="contained" sx={{bgcolor: '#DF9110'}}>
                    SQL
                </Button>
            </Item>
        </Box>
    </div>
  )
}

export default Skills
