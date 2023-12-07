import React,{useState,useEffect} from 'react'
import { Box,Stack,Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Video from './Video'
import { fetchFromAPI } from '../utils/fetchFromAPI'
function Feed() {
  const [selectedCategory, setselectedCategory] = useState('New');
  const[videos,setVideos]=useState([]);
  useEffect(()=>
  {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).
    then((data)=>{setVideos(data.items)})

  },[selectedCategory]);
  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},
      borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
        <Sidebar
           selectedCategory={selectedCategory}
           setselectedCategory={setselectedCategory}       
        />
        <Typography className='copyright' variant='body2'
      sx={{mt:1.5,color:'#fff'}}>
        Copyright 2023 Harsh Mohan
      </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}} > 
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
        {selectedCategory} <span style={{color:'#F31503'}}>
            videos
          </span>
        </Typography>
        <Video videos={videos} />
      </Box>
    
      </Stack>
  )
}

export default Feed