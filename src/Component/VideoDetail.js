import React from 'react';

const VideoDetail =(props)=>{
    if(!props.videodetail){
        return <div>Loading</div>
    }
  const Url ="https://www.youtube.com/embed/"+props.videodetail.id.videoId;
return(

<div style={{marginTop:'20px'}} >
<div className="ui embed">
<iframe
src={Url}/>
</div>

<div className="ui message">

        <div className="header">
                     {props.videodetail.snippet.title}
        </div>

          <p>{props.videodetail.snippet.description}</p>

</div>
</div>

    


);

}

export default VideoDetail;