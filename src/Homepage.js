import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import { Button, AppBar, Toolbar } from '@mui/material';
import Typed from "react-typed"
import Avatar from '@mui/material/Avatar';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import aniket from './images/aniket.jpeg';
import Connect from './Connect';

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          mx: 2,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          ...sx,
        }}
        {...other}
      />
    );
  }


const Homepage = () => {

    const bottomRef = React.useRef();
    const about = React.useRef();
    const home = React.useRef();

    const onClick = () => {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
    const viewAbout = () => {
        about.current.scrollIntoView({ behavior: "smooth" });
    }
    const viewHome = () => {
        home.current.scrollIntoView({ behavior: "smooth" });
    }
  return (
    <div className='App'>
        <AppBar position="fixed" style={{ background: 'transparent'}}>
            <Toolbar sx = {{display: 'flex', justifyContent: 'center', bgcolor: 'text.secondary'}}>
            <Item>
                <Button variant="contained" sx = {{bgcolor: '#E17D04'}} onClick={viewHome}>
                    Home
                </Button>
            </Item>
            <Item>
                <Button variant="contained" sx = {{bgcolor: '#E17D04'}} onClick={viewAbout}>
                    About
                </Button>
            </Item>
            <Item>
                <Button variant="contained" sx = {{bgcolor: '#E17D04'}} onClick={onClick}>
                    Projects
                </Button>
            </Item>
            </Toolbar>
        </AppBar>
      
        <div className='App-header' ref={home}>
        <Box sx={{ display: 'flex-col', border: 4, borderRadius: '5px', borderColor: '#212129', p:3, justifyContent: 'center', width: '40%', height: '40vh', bgcolor:"#282c34" }}>
            <Avatar src={aniket}
                sx={{ width: 100, height: 110, m: 'auto' }}>
            </Avatar>
        
            <div>
                <Typed
                strings={[
                    "Hello World 👋!",
                    "I am Aniket, a software developer from India 🇮🇳",
                    "Have a look at my profile below!"
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                />
            </div>
        </Box>    
        </div>
        <div ref={about}>
            <About />
        </div>
        <div>
            <Skills />
        </div>
        <div ref={bottomRef}>
            <Projects />
        </div>
        <div>
            <Connect />
        </div>
    </div>
  )
}

export default Homepage
