import React from "react";
import Layout from "../components/layout";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Script } from "gatsby";

class IndexPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isArticleVisible: false,
			timeout: false,
			articleTimeout: false,
			article: "",
			loading: "is-loading",
			style: "",
			cssLoaded: false,
		};
		this.handleOpenArticle = this.handleOpenArticle.bind(this);
		this.handleCloseArticle = this.handleCloseArticle.bind(this);
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	componentDidMount() {
		this.setState({ cssLoaded: true });
		this.timeoutId = setTimeout(() => {
			this.setState({ loading: "" });
		}, 100);
		document.addEventListener("mousedown", this.handleClickOutside);

		let vars = {};
		window.location.href.replace(
			/[?&]+([^=&]+)=([^&]*)/gi,
			function (m, key, value) {
				vars[key] = value;
			},
		);

		if (vars.redirectFrom === "/resume") {
			this.handleOpenArticle("resume");
		}

		if (vars.redirectFrom === "/strengths") {
			this.handleOpenArticle("strengths");
		}

		if (
			vars.redirectFrom &&
			vars.redirectFrom.toLowerCase() === "/getonlineworkshop"
		) {
			this.handleOpenArticle("getOnlineWorkshop");
		}

		this.setState({
			style: (
				<style
					dangerouslySetInnerHTML={{
						__html: [
							"#bg:after {",
							`  background-image: url("/bgs/bg-0${this.randNum(1, 50)}.webp");`,
							"}",
						].join("\n"),
					}}
				/>
			),
		});
	}

	componentWillUnmount() {
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}
		document.removeEventListener("mousedown", this.handleClickOutside);
	}

	setWrapperRef(node) {
		this.wrapperRef = node;
	}

	handleOpenArticle(article) {
		this.setState({
			isArticleVisible: !this.state.isArticleVisible,
			article,
		});

		setTimeout(() => {
			this.setState({
				timeout: !this.state.timeout,
			});
		}, 325);

		setTimeout(() => {
			this.setState({
				articleTimeout: !this.state.articleTimeout,
			});
		}, 350);
	}

	handleCloseArticle() {
		this.setState({
			articleTimeout: !this.state.articleTimeout,
		});

		setTimeout(() => {
			this.setState({
				timeout: !this.state.timeout,
			});
		}, 325);

		setTimeout(() => {
			this.setState({
				isArticleVisible: !this.state.isArticleVisible,
				article: "",
			});
		}, 350);
	}

	handleClickOutside(event) {
		if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
			if (this.state.isArticleVisible) {
				this.handleCloseArticle();
			}
		}
	}

	randNum(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	render() {
		return (
			<Layout location={this.props.location}>
				{this.state.cssLoaded && (
					<link
						rel="stylesheet"
						href="https://assets.calendly.com/assets/external/widget.css"
					/>
				)}

				<div
					className={`body ${this.state.loading} ${
						this.state.isArticleVisible ? "is-article-visible" : ""
					}`}
				>
					{this.state.style}
					<div id="wrapper">
						<Header
							onOpenArticle={this.handleOpenArticle}
							timeout={this.state.timeout}
						/>
						<Main
							isArticleVisible={this.state.isArticleVisible}
							timeout={this.state.timeout}
							articleTimeout={this.state.articleTimeout}
							article={this.state.article}
							onCloseArticle={this.handleCloseArticle}
							setWrapperRef={this.setWrapperRef}
						/>
						<Footer
							timeout={this.state.timeout}
							onOpenArticle={this.handleOpenArticle}
						/>
					</div>
					<div id="bg" />
				</div>
			</Layout>
		);
	}
}

export const Head = () => {
	return (
		<>
			<meta
				name={"description"}
				content={
					"Max Matthews: Full Stack Javascript Developer, Hacker, Mentor, & Entrepreneur. Syracuse, NY. CTO @ tuzag."
				}
			/>
			<meta
				name={"keywords"}
				content={
					"max matthews, full stack developer, javascript, mentor, hacker, entrepreneur, careers in code, syracuse, ny, tuzag, cto"
				}
			/>
			<Script
				src="https://assets.calendly.com/assets/external/widget.js"
				type="text/javascript"
			/>

			<meta property="og:type" content="website" />
			<meta property="og:image" content="https://maxmatthe.ws/og_image.png" />
			<meta property="og:title" content="Max Matthews" />
			<meta property="og:image:width" content="1227" />
			<meta property="og:image:height" content="715" />
			<meta property="og:url" content="https://maxmatthe.ws" />
			<meta
				property="og:description"
				content="Full stack javascript developer, hacker, mentor, & entrepreneur."
			/>
			<meta
				property="og:video"
				content="https://maxmatthe.ws/maxlogoanimation.mp4"
			/>
			<meta property="og:image:width" content="3840" />
			<meta property="og:image:height" content="2160" />
			<title>Max Matthews</title>
		</>
	);
};

export default IndexPage;
