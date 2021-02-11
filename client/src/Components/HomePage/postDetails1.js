import React from 'react';
import heart from '../../img/heart.svg';
import share from '../../img/share.png';
import redheart from '../../img/likedheart.svg'
import './post1.css'
const axios = require('axios');
class PostDetails extends React.Component{
    constructor(props){
        super(props)
            this.state = {date:props.date,
            likes :props.likes,
            caption:props.caption,
            id:props.id,
            liked:false
        }
    }
    likesHandler = async () => {
        console.log(this.state.liked)
        if (!this.state.liked){
            console.log('liked',this.state.id)
            await axios.post('http://localhost:9000/api/like',{id:this.state.id});
            this.setState({
                liked:true
            })
        }
        
    }
    
    render(){
        console.log(this.state.liked)
        return <div className='Bottom-Details-Container'>
            <div className='icons-container'>
                <div className='Like-Icons'>
                {!this.state.liked ? <img className='heart' src={heart} onClick={this.likesHandler} /> : <img src={redheart} className='heart'/>}
                    
                <img src={share} className='share' />
                
                    
                </div>
                <div className='date'>
                    <p>{this.state.date}</p>
                </div>
            </div>
            <div className='like'>
                <p>{this.state.likes}</p>
            </div>
            <div className='caption'>
                <p>{this.state.caption}</p>
            </div>
        </div>
    }

}


export default PostDetails;
