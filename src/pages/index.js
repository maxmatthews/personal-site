import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/layout";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { getBackgroundImage } from "../utils/background";
import PortfolioSection from "../pages/portfolio/PortfolioSection";

const IndexPage = ({ location }) => {
	const [isArticleVisible, setIsArticleVisible] = useState(false);
	const [timeout, setTimeoutState] = useState(false);
	const [articleTimeout, setArticleTimeout] = useState(false);
	const [article, setArticle] = useState("");
	const [loading, setLoading] = useState("is-loading");
	const [style, setStyle] = useState("");
	const [cssLoaded, setCssLoaded] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [arrowVisible, setArrowVisible] = useState(true);
	const wrapperRef = useRef(null);
	const portfolioRef = useRef(null);

	// Helper to determine arrow visibility
	const computeArrowVisible = () => {
		return window.innerWidth >= 576 && window.scrollY < 1;
	};

	useEffect(() => {
		setCssLoaded(true);
		const timeoutId = setTimeout(() => {
			setLoading("");
		}, 100);

		document.addEventListener("mousedown", handleClickOutside);

		// Use URLSearchParams for query parsing
		const params = new URLSearchParams(window.location.search);
		const redirectFrom = params.get("redirectFrom");

		if (redirectFrom === "/resume") {
			handleOpenArticle("resume");
		}

		if (redirectFrom === "/strengths") {
			handleOpenArticle("strengths");
		}

		if (redirectFrom === "portfolio") {
			if (portfolioRef.current) {
				setTimeout(() => {
					portfolioRef.current.scrollIntoView({ behavior: "smooth" });
					// Remove 'redirectFrom=portfolio' from the URL after scrolling
					const newParams = new URLSearchParams(window.location.search);
					newParams.delete("redirectFrom");
					const newUrl =
						window.location.pathname +
						(newParams.toString() ? `?${newParams.toString()}` : "");
					window.history.replaceState({}, "", newUrl);
				}, 500);
			}
		}

		if (redirectFrom && redirectFrom.toLowerCase() === "/getonlineworkshop") {
			handleOpenArticle("getOnlineWorkshop");
		}

		const bgImage = getBackgroundImage();
		if (bgImage) {
			setStyle(
				<style
					dangerouslySetInnerHTML={{
						__html: [
							"#bg:after {",
							`  background-image: url(\"${bgImage}\");`,
							"}",
						].join("\n"),
					}}
				/>,
			);
		}

		const handleArrowVisibility = () => {
			setArrowVisible(computeArrowVisible());
		};

		handleArrowVisibility(); // Set initial state
		window.addEventListener("scroll", handleArrowVisibility);
		window.addEventListener("resize", handleArrowVisibility);

		return () => {
			clearTimeout(timeoutId);
			document.removeEventListener("mousedown", handleClickOutside);
			window.removeEventListener("scroll", handleArrowVisibility);
			window.removeEventListener("resize", handleArrowVisibility);
		};
	}, []);

	const handleOpenArticle = (article) => {
		setIsArticleVisible(true);
		setArticle(article);
		setTimeoutState(true);
		setTimeout(() => {
			setArticleTimeout(true);
		}, 350);
	};

	const handleCloseArticle = () => {
		setArticleTimeout(false);
		setTimeout(() => {
			setIsArticleVisible(false);
			setArticle("");
			setTimeoutState(false);
		}, 350);
	};

	const handleClickOutside = (event) => {
		if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			if (isArticleVisible) {
				handleCloseArticle();
			}
		}
	};

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<Layout location={location}>
			{cssLoaded && (
				<link
					rel="stylesheet"
					href="https://assets.calendly.com/assets/external/widget.css"
				/>
			)}

			<div
				className={`body ${loading} ${isArticleVisible ? "is-article-visible" : ""}`}
			>
				{style}
				<div id="wrapper">
					<Header
						onOpenArticle={handleOpenArticle}
						onOpenModal={handleOpenModal}
						timeout={timeout}
						onScrollToPortfolio={() => {
							if (portfolioRef.current) {
								portfolioRef.current.scrollIntoView({ behavior: "smooth" });
							}
						}}
					/>
					<Main
						isArticleVisible={isArticleVisible}
						timeout={timeout}
						articleTimeout={articleTimeout}
						article={article}
						onCloseArticle={handleCloseArticle}
						setWrapperRef={wrapperRef}
					/>
					<Footer timeout={timeout} onOpenArticle={handleOpenArticle} />
				</div>

				{/* Arrow down button that scrolls to portfolio */}
				<div
					className={`arrow-down-container`}
					style={{
						visibility: arrowVisible ? "visible" : "hidden",
						position: "fixed",
						left: "50%",
						transform: "translateX(-50%)",
						bottom: 60,
						zIndex: 60,
					}}
				>
					<button
						aria-label="Scroll to portfolio"
						className="arrow-down"
						onClick={() => {
							if (portfolioRef.current) {
								portfolioRef.current.scrollIntoView({ behavior: "smooth" });
							}
						}}
						style={{
							background: "transparent",
							border: "none",
							cursor: "pointer",
							color: "white",
							fontSize: 28,
						}}
					>
						{/* simple caret down svg */}
						<svg
							width="36"
							height="36"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6 9l6 6 6-6"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>

				{/* Portfolio section rendered below the fold */}
				<div ref={portfolioRef}>
					<PortfolioSection id="portfolio-section-home" />
				</div>
				<div id="bg" />

				{/* Calendly Modal */}
				{isModalOpen && (
					<div className="modal-overlay" onClick={handleCloseModal}>
						<div className="modal-content" onClick={(e) => e.stopPropagation()}>
							<button
								className="modal-close"
								onClick={handleCloseModal}
								aria-label="Close modal"
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M18 6L6 18M6 6l12 12"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
							<iframe
								src="https://calendly.com/maxmatthews"
								width="100%"
								height="600"
								frameBorder="0"
								title="Book a Meeting"
							></iframe>
						</div>
					</div>
				)}
			</div>
		</Layout>
	);
};

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
