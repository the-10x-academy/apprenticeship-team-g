import logo from "../../logo.svg";
import "./HomePage.css";
import mainImage from '../../images/mainImage.png'
import React from 'react';

class HomePage extends React.Component{
	
	render(){
		return <div class='entry-main'>
			<div className='entry-container'>
				<img src={mainImage} />
				<div className='entry-name'>
					<p className='entry-title'>10x Team 7</p>
					<button>Enter</button>
				</div>
				
			</div>
		</div>
		
	}
}

export default HomePage;
