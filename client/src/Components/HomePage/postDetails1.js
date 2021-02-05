import React from 'react';
import heart from '../../img/heart.png';
import share from '../../img/share.png';
import './post1.css'
class PostDetails extends React.Component{
    constructor(props){
        super(props)
            this.state = {date:props.date,
            likes :props.likes,
            caption:props.caption
        }
    }
    render(){
        return <div className='Bottom-Details-Container'>
            <div className='icons-container'>
                <div className='Like-Icons'>
                    <img className='heart' src = {heart}/>
                    <img className='share' src = {share}/>
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
