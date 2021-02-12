
import "./HomePage.css";
import mainImage from '../../img/mainImage.png'
import React from 'react';

import { Link } from "react-router-dom";
class HomePage extends React.Component{
	constructor(props){
		super(props)
		
	}
	
	render(){
		let ele = null
		
			return <div className='entry-main'>
				
			<div className='entry-container'>
				<img src={mainImage} />
				<div className='entry-name'>
					<p className='entry-title'>10x Team 7</p>
					<Link to='/postList'>
					<button >Enter</button>
					</Link>
					
				</div>	
			</div>
		</div>
		}	
}

export default HomePage;
