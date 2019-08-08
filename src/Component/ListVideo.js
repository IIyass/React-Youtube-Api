import React from 'react';
import VideoItem from './VideoItem';


const ListVideo = (props)=>{

  


const Lvideos = props.Videos.map((video) =>{

return <VideoItem video={video}  SelectVideo={props.SelectVideo}/>
});

return (
<div style={{marginTop:'20px'}} className="ui relaxed divided list">

{Lvideos}
</div>
);

}

export default ListVideo;