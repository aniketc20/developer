import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import { Button, AppBar, Toolbar } from '@mui/material';
import Typed from "react-typed"
import Avatar from '@mui/material/Avatar';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

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
            <Avatar src=
                "https://lh3.googleusercontent.com/LQK8STOG46poW85KNdtCgKo8QRV_VFAqmxE8j-z4inSNWAfwuJpIeak8iii3JYSKpIlaOnAvDYZ5PclZtHzmA1CLHF8hVtuHD7wIe-yfE8eGYcNHMxr2jFMAkebDXNSnH9TOL5sT4bsD5aDQWxsGG13VhyFWegMUYPlQsocrfSPD2maFdbIlbKqIMKXC5G25MbQc61VHWLjaEm8AV5xjH0kGQtMl9U3emQAsx1v8BN92oIareC9_gFBSChrumPmXz90_wn_reA1oD0nLLaZjsvFbgDnpw3JHiVPOk5-aBDnNYDVjuhCgip8B7A-jYwW45vX3xcvLSrfN0k5xNsifIAaROtynpt3ktLjbHVTbM1xBje1EQz6vXFv4zQhGVXXvYakFubeL4XNOyEs9aFy9QJGCEUI-n_C3eIQ8cCf8JNqHi6YK5fWFIzw8ChTlt6e7pypQVHtdnBiOKKEb2JRnRIrXfi3YANgNDsfJL5NPps6fqFtzEr-N3CuE1RLwFky1t3Cy6tQhQa7ApjTvDyfrOu_JEzC0IQVvJ1UdDqF94GI0CmzEgXhp7dnyy05bjVpBkWzhkX8YkuzE8JfNz7m2l1V0YUHbpyXK8SUGVxS-Jx6EnM033cztNPVX9lRtOGFLqnx-RL5hbIhm_7BYxlIMOpuVnJ-yf7eFM1cKL8yQM1j8F9k7H2i7VPqq5BdSsLiFw0JuiIPIQ3JvNf-q1HqGx7WsaEaVuSTSKCk5vKbMxCKvDAbPkTR999ZVuRtI8eQg_JkDFgDF9vcgiQvrnf6Pz1iQPdUg6K-y5Z5UHlDaZkCwk-pSOq6v0AoU2g8bH5Avl-geMG4HGwLQ2pJLdbFiSIC94HSC0QHV8PVLLKPbaMl1Mj9hbwTCiGXJhPLYM7o3rqh8OHFz7SL5Fw73QgGDDjFSYfVdaKqNlLdOllpaFLHSnsBJQXFkcpdkL-zQmaNbDmglPsdhZ5sDFWDnLcwMwrUvYdNkP-oe4CD6nxqn2E_qAMNbpIo9oEFTIKsh5spOGS3qG1473NmFUOjP1bbE5w=w652-h737-no?authuser=0"
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
    </div>
  )
}

export default Homepage
