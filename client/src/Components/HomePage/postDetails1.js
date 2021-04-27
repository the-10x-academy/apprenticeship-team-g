import React from "react";
import heart from "../../img/heart.svg";
import share from "../../img/share.png";
import redheart from "../../img/likedheart.svg";
import "./post1.css";
const axios = require("axios");
class PostDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: props.date,
			likes: props.likes,
			caption: props.caption,
			id: props.id,
			liked: false,
			comments: props.comments,
			comment: "",
		};
	}
	likesHandler = async (isLiked) => {
		console.log(this.state.liked);

		await axios.post("http://localhost:9000/api/like", {
			id: this.state.id,
			liked: this.state.liked,
		});
		if (isLiked) {
			this.setState({
				liked: true,
				likes: this.state.likes + 1,
			});
		} else {
			this.setState({
				liked: false,
				likes: this.state.likes - 1,
			});
		}
	};
	commentHandler = async () => {
		console.log(this.state.comment);
		this.state.comments.push(this.state.comment);
		this.setState({ comments: this.state.comments });
		console.log(".....", this.state.comments);
		await axios.post("http://localhost:9000/api/comment", {
			id: this.state.id,
			comments: this.state.comments,
		});
	};
	handleChange = ({ target }) => {
		this.setState({
			[target.name]: target.value,
		});
	};

	render() {
		console.log(this.state.liked, this.state.comments);
		let commentsHtml;
		commentsHtml = this.state.comments.map((elem) => {
			return <p>{elem}</p>;
		});
		return (
			<div className="Bottom-Details-Container">
				<div className="icons-container">
					<div className="Like-Icons">
						{!this.state.liked ? (
							<img
								className="heart"
								src={heart}
								onClick={() => {
									this.likesHandler(true);
								}}
							/>
						) : (
							<img
								onClick={() => {
									this.likesHandler(false);
								}}
								src={redheart}
								className="heart"
							/>
						)}

						<img src={share} className="share" />
					</div>
					<div className="comment">
						<p>
							comment{" "}
							<input onChange={this.handleChange} type="text" name="comment" />
							<button
								onClick={this.commentHandler}
								// className="buttonSize"
								value="submit"
							>
								submit
							</button>
						</p>
					</div>
					<div className="date">
						<p>{this.state.date}</p>
					</div>
				</div>
				<div className="like">
					<p>{this.state.likes}</p>
				</div>
				<div className="comment">{commentsHtml}</div>
				<div className="caption">
					<p>{this.state.caption}</p>
				</div>
			</div>
		);
	}
}

export default PostDetails;
