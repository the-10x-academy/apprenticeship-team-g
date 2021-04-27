import React from "react";
import Post from "../HomePage/Post";
import Header from "../../header";
import Upload from "../../uploadComponent/uploadComponent";
import "./postList.css";
class PostList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			post: [],
			display: false,
		};
	}
	componentDidMount() {
		fetch("http://localhost:9000/api/post")
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				console.log("got this", res);
				this.setState({ post: res });
			});
	}
	toggleDisplay = () => {
		this.setState({
			display: !this.state.display,
		});
	};

	render() {
		let ele = null;
		console.log(this.state.post);
		if (this.state.post && !this.state.display) {
			ele = this.state.post.map((item) => {
				console.log(item._id, "item");
				return (
					<Post
						key={item.at}
						id={item._id}
						date={item.date}
						owner={item.owner}
						location={item.location}
						caption={item.caption}
						likes={item.likes}
						img={item.content}
						comments={item.comments ? item.comments : []}
					/>
				);
			});
		} else {
			ele = <Upload toggleDisplay={this.toggleDisplay} />;
		}
		return (
			<div className="postlist-container">
				<Header toggleDisplay={this.toggleDisplay} />
				<ul>{ele}</ul>
			</div>
		);
	}
}
export default PostList;
