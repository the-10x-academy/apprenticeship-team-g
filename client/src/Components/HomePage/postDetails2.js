import React from 'react'
import more_icon from '../../img/more_icon.svg'
import './post2.css'
class PostDetailsTop extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:props.name,
            location:props.location
        }
    }
    render(){
        return <div className='Info-Container'>
            
            <div className='container'>
                <p className='name'>{this.state.name}</p>
                <p className='location2'>{this.state.location}</p>
            </div>
            <div> 
                <img className='more_icon' src = {more_icon} />
            </div>
        </div>
    }
}
export default PostDetailsTop








