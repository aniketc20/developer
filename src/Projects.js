import React from 'react'
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Projects = () => {
  return (
    <div className='Projects'>
        
        Projects
        <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            <Card sx={{ maxWidth: 345, m: 3 }}>
            <CardMedia
                component="img"
                height="150"
                image="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Twitter
                </Typography>
                <Typography variant="body2" color="text.secondary" align='justify'>
                This app allows users to post their tweets, follow other users,
                post comments and like other users posts.
                <br></br>
                Features:
                    <li>
                        OAuth 2.0 enabled
                    </li>
                    <li>
                        Follow other users
                    </li>
                    <li>
                        Like/reply to tweets
                    </li>
                    <li>
                        Post, tweet, reply using GIFs
                    </li>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href='https://twitter-44ef3.web.app/'>Live Demo</Button>
                <Button size="small" href='https://github.com/aniketsonu/Twitter-backend'>Backend Code</Button>
                <Button size="small" href='https://github.com/aniketsonu/Twitter-frontend'>Frontend Code</Button>
            </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345, m: 3 }}>
            <CardMedia
                component="img"
                height="150"
                image="https://aniketmovieapp.herokuapp.com/static/register.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                MovieFlix
                </Typography>
                <Typography variant="body2" color="text.secondary" align='justify'>
                    This app fetches data from 'THE MOVIE DATABASE' API and shows the user the details of all the relevant movies searched for.
                    <br></br>
                    Features:
                    <li>
                        Search for a movie
                    </li>
                    <li>
                        Add movies to favourites
                    </li>
                    <li>
                        Watch the trailer and cast
                    </li>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href='https://aniketmovieapp.herokuapp.com/'>Live Demo</Button>
                <Button size="small" href='https://github.com/aniketsonu/Movie-App'>Code</Button>
            </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345, m: 3 }}>
            <CardMedia
                component="img"
                height="150"
                image="https://www.careeraddict.com/uploads/article/60308/job-search-apps.png"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Job Search App
                </Typography>
                <Typography variant="body2" color="text.secondary" align='justify'>
                    Features:
                    <li>
                        Companies create and Post jobs
                    </li>
                    <li>
                        Job seekers can view the available jobs
                    </li>
                    <li>
                        Job seekers upload their resume and apply for the Job
                    </li>
                    <li>
                        Companies can view list of users applied for the job and can either reject/accept candidate
                    </li>
                    <li>
                        The Job seeker can see the status of their application (Applied/Selected/Rejected)
                    </li>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href='https://github.com/aniketsonu/jobapp-backend'>Backend Code</Button>
                <Button size="small" href='https://github.com/aniketsonu/jobapp-frontend'>Frontend Code</Button>
            </CardActions>
            </Card>
        </Box>
    </div>
  )
}

export default Projects
