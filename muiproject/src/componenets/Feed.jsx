import Box from '@mui/material/Box'
import React from 'react'
import FeedCard from './FeedCard'

const Feed = () => {
  return (
    <Box flex={4} sx={{direction:'flex', flexDirection:'column', padding:'10px 0', gap:'3rem', border:'3rem'}}>
    <FeedCard/>
    <FeedCard/>
    <FeedCard/>
    </Box>
  )
}

export default Feed
