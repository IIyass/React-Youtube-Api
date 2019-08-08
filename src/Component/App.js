import React from 'react';
import Search from './Search';
import Axios from 'axios';
import { async } from 'q';
import { constants } from 'fs';
import ListVideo from './ListVideo';
import VideoDetail from './VideoDetail';



class App extends React.Component{
    constructor(props){
        super(props)
        this.state={videos:[],
            selectedVideo:null};
    }
    
       componentDidMount(){
           this.Whensearch('react-js');
       }
     

    Whensearch = async term =>{
     const Response = await  Axios.get('https://www.googleapis.com/youtube/v3/search',{
        params:{
            q:term,
            part:'snippet',
            maxResults:5,
            key:'AIzaSyAErYYTxcQdH0IQnKDxQpQOicIEfWHvI7w'
        }    
       })
       this.setState({videos:Response.data.items,
    selectedVideo:Response.data.items[0]});
       
    };


    SelectVideo = video =>{
        this.setState({selectedVideo: video });
    }


render(){

    return(
             <div className="ui container"style={{marginTop:'20px'}}>  
                 <Search whensearch={this.Whensearch} />

                <div class="ui grid">

                            <div className="eleven wide column">
                                       <VideoDetail  videodetail={this.state.selectedVideo} />
                             </div>

                            <div className="five wide column">
                                          <ListVideo Videos={this.state.videos} 
                                            SelectVideo={this.SelectVideo} />
                            </div>

                </div> 
             </div>
                
 
                  


    );
}}

export default App;