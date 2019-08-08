import React from 'react';
import '../css/VideoItem.css'



const VideoItems = (props)=>{



    return (

         

  <div onClick={()=>props.SelectVideo(props.video)} className=" video-item item">
    <img className="ui  image" src={props.video.snippet.thumbnails.medium.url}/>
    <div className="content">
      <a className="header">{props.video.snippet.title}</a>
     
    </div>
  </div>

  

    );


}
export default VideoItems;