import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Verified } from "@mui/icons-material";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet} }) => {


  return (
    <Card 
      sx={{
        width: { xs: '100%', sm: '358px', md: '320px',  },
        boxShadow: 'none',
        borderRadius: '5px'

      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {/* Video Thumbnail Images */}
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
            width: { sx: '100%', sm: '358px', md: '320px'},
            height: 180,
          }}
        />
      </Link>
      {/* Video Content Information */}
      <CardContent 
        sx={{
          backgroundColor: '#1e1e1e',
          height: '106px',
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
          <Typography
            variant="subtitle1"
            fontWeight='bold'
            color='#fff'
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <Typography
            variant="subtitle2"
            fontWeight='bold'
            color='gray'
          >
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <Verified sx={{ fontSize: 12, color: 'skyblue', ml: '5px' }} />
          </Typography>
        </Link>
          <Typography
            variant="body2"
            fontWeight='light'
            color='gray'
            pt={1}
          >
            {snippet?.publishedAt.slice(0, 10)}
          </Typography>
      </CardContent>
    </Card>
  ) 
}

export default VideoCard