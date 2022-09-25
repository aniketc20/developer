import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '0.5rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};

const About = () => {
  return (
    <div className='About'>
        <p sx={{p:3}}>
            About me
        </p>
      <ThemeProvider theme={theme}>
        <Typography variant="h5" sx={{m: 2}}>
            <p>
                I am an incoming Advanced App Engineering Software Associate at Accenture
                <img src='https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo.png'
                style={{'width':'40px', 'height':'20px'}}></img>, India
            </p>
            I have always been 
            passionate about web development from my sophomore year.
            I enjoy innovating and applying my skills to solve real life problems.
            <br></br>
            <br></br>
            Learning new things excites me, and currently I am expanding my knowledge on cloud ☁️ computing, Kubernetes and Docker. 
            I also play the guitar 🎸 and sing :)

            <br></br>
            <Typography variant="h3" sx={{m: 4}}>
            𝘈𝘯𝘪𝘬𝘦𝘵 𝘊𝘩𝘰𝘶𝘥𝘩𝘢𝘳𝘺
            </Typography>
        </Typography>
    </ThemeProvider>
    </div>
  )
}

export default About
