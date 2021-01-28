import React from 'react';
import Post from './Posts.js';

class PostList extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            post:[{},{},{},{},{}]
        }
    }
    render(){
        let ele = null;
        ele = this.state.post.map((item) => {
            return <Post owner={item.owner} location={item.location} caption = {item.caption} likes={item.likes} img={item.img}></Post>
        })
        return <ul>
            {ele}
        </ul>
    }

}
export default Post