import React from 'react';
import Post from '../HomePage/Post';

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
            console.log('got this',res)
            this.setState({post:res})
        }) 
    }
    render(){
        let ele = null;
        console.log(this.state.post)
        if(this.state.post)
        {
            ele = this.state.post.map((item) => {
                console.log(item._id,'item');
                return <Post id={item._id}date={item.createdAt} owner={item.owner} location={item.location} caption = {item.caption} likes={item.likes} img={item.content} />
            })

        }
        return <ul>
            {ele}
        </ul>
    }

}
export default PostList