import React from "react";
import "./uploadComponent.css";
class uploadComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			description: "",
			location: "",
			author: "",
			fileName: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.fileInput = React.createRef();
	}
	handleClick(event) {
		event.preventDefault();
		this.fileInput.current.click();
	}
	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });

		if (event.target.name === "file") {
			let name = event.target.value.split("\\");
			this.setState({ fileName: name[name.length - 1] });
		}
	}
	async handleSubmit(event) {
		var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/;
		if (allowedExtensions.exec(this.fileInput.current.files[0].name)) {
			const formData = new FormData();
			formData.append("author", this.state.author);
			formData.append("location", this.state.location);
			formData.append("description", this.state.description);
			formData.append("image", this.fileInput.current.files[0]);
			await fetch("http://localhost:9000/posts", {
				method: "POST",
				body: formData,
			})
				.then((response) => response.json())
				.catch((error) => {
					console.error("Error:", error);
				});
		} else {
			event.preventDefault();
			alert("Error: File Not Supported");
		}
	}
	render() {
		return (
			<center>
				{" "}
				<div className="box">
					<form onSubmit={this.handleSubmit}>
						<input
							type="text"
							disabled="true"
							className="file"
							placeholder=" No file chosen"
							value={this.state.fileName}
						/>
						<input
							type="file"
							ref={this.fileInput}
							accept="image/*"
							hidden
							name="file"
							className="file-btn"
							onChange={this.handleChange.bind(this)}
						/>
						<button
							className="browse"
							onClick={this.handleClick.bind(this)}
							className="browse"
						>
							Browse
						</button>
						<br />

						<input
							type="text"
							placeholder=" Author"
							className="author"
							name="author"
							value={this.state.author}
							onChange={this.handleChange.bind(this)}
						/>

						<input
							type="text"
							placeholder=" Location"
							className="location"
							name="location"
							value={this.state.location}
							onChange={this.handleChange.bind(this)}
						/>
						<br />
						<input
							type="text"
							placeholder=" Description"
							name="description"
							className="description"
							value={this.state.description}
							onChange={this.handleChange.bind(this)}
							className="description1"
						/>
						<br />
						<input
							type="submit"
							value="Post"
							className="post"
							disabled={
								!this.state.author ||
								!this.state.location ||
								!this.state.description ||
								!this.state.fileName
							}
						/>
					</form>
				</div>
			</center>
		);
	}
}
export default uploadComponent;
