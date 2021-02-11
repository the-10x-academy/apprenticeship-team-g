import DetailsTop from './postDetails2'
import DetailsBottom from './postDetails1'
import Image from '../ImageComponent/ImageComponent'
import './Post.css'

function Post(props){
    return <div className='Post-Container'>
        <DetailsTop name={props.owner} location={props.location} />
        <Image img={props.img} />
        <DetailsBottom date={props.date} caption={props.caption} likes={props.likes} id={props.id}/>
    </div>
}

export default Post;