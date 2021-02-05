import logo from "../../logo.svg";
import "./HomePage.css";
import mainImage from '../../img/mainImage.png'
import React from 'react';
import PostList from '../postlist/postlist'
import Header from '../../header'
class HomePage extends React.Component{
	constructor(props){
		super(props)
		this.state={
			enter:false
		}
	}
	toggleDisplay = () => {
		console.log('clckedc')
		this.setState({
			enter:true
		})
	}
	render(){
		let ele = null
		if (!this.state.enter){
			ele = <div class='entry-main'>
			<div className='entry-container'>
				<img src={mainImage} />
				<div className='entry-name'>
					<p className='entry-title'>10x Team 7</p>
					<button onClick={this.toggleDisplay}>Enter</button>
				</div>	
			</div>
		</div>
		}
		else{
			ele = <div>
					<Header />
					<PostList />
				</div>
		}
		return ele
		
	}
}

export default HomePage;
