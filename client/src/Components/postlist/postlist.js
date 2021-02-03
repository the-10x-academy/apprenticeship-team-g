import React from 'react';
import Post from './Posts.js';

class PostList extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            post:[]
        }
    }
    componentDidMount(){
        fetch("http://localhost:9000/api/post")
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            this.setState({post:res})
        }) 
    }
    render(){
        let ele = null;
        if(this.state.post)
        {
            ele = this.state.post.map((item) => {
                return <Post owner={item.owner} location={item.location} caption = {item.caption} likes={item.likes} img={item.img}></Post>
            })

        }
        return <ul>
            {ele}
        </ul>
    }

}
export default PostList