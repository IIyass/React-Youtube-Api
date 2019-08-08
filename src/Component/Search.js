import React from 'react';


class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={term:''}
    }



Onsubmit =(e)=>{

e.preventDefault();

this.props.whensearch(this.state.term);

}


















render(){

return(


    
    <div className="ui loading search">
        <form onSubmit={this.Onsubmit} >
            <div  className="ui fluid icon input">
                             
                <input onChange= {e=>this.setState({term:e.target.value})} value={this.state.term} className="prompt" type="text" placeholder="Search..."/>
                <i className="search icon"></i>
                              
            </div>
  
                                    
        
        </form>
    </div>
      



);
}
}


export default Search ;