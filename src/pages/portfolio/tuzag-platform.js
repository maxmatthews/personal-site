import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import { getBackgroundImage } from "../../utils/background";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "@gatsbyjs/reach-router";

const TuzagPlatformPage = () => {
	const project = {
		id: 1,
		title: "tuzag Development Studio",
		description:
			"Agentic AI platform for building conversational relationships",
		image: "project1",
		technologies: [
			"React",
			"Node.js",
			"Meteor",
			"Mongo",
			"Conversational AI Integrations",
		],
		slug: "tuzag-platform",
	};

	const [bgImage, setBgImage] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		// Use the same background image as the homepage
		const bgImage = getBackgroundImage();
		if (bgImage) {
			setBgImage(bgImage);
		}

		// Trigger animation after component mounts
		const timer = setTimeout(() => {
			setIsLoaded(true);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Layout>
			{bgImage && (
				<style
					dangerouslySetInnerHTML={{
						__html: [
							"#bg:after {",
							`  background-image: url("${bgImage}");`,
							"}",
						].join("\n"),
					}}
				/>
			)}
			<div className="body">
				<div id="wrapper">
					<span
						onClick={() => {
							navigate(-1);
						}}
						className="back-button-fixed"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M19 12H5M12 19L5 12L12 5"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</span>
					<div className={`project-details-page ${isLoaded ? "loaded" : ""}`}>
						<div
							className={`project-header ${isLoaded ? "animate-fade-in-up" : ""}`}
						>
							<h1>{project.title}</h1>
							<p className="project-subtitle">{project.description}</p>
						</div>

						<div className="project-content-grid">
							{/* Hero Image Section */}
							<div
								className={`project-hero-section ${isLoaded ? "animate-fade-in-up" : ""}`}
							>
								<div className="project-image-large">
									<StaticImage
										src="../../images/tcs-screenshot.svg"
										alt="tuzag Development Studio Screenshot"
										className="project-screenshot"
									/>
								</div>
							</div>

							{/* Main Content Grid */}
							<div className="project-main-content">
								{/* About Section - Full Width */}
								<div
									className={`project-about-section ${isLoaded ? "animate-fade-in-up" : ""}`}
								>
									<h3>About This Project</h3>
									<div className="project-description">
										<p>
											The tuzag Development Studio is a comprehensive platform
											for building and deploying Agentic AI solutions that go
											beyond simple transactions to create lasting customer
											relationships. As CTO, I led the technical architecture
											and development of this groundbreaking Relationship AI
											platform.
										</p>
										<p>
											The platform combines Conversational AI, Generative AI,
											and behavioral science to create digital concierges that
											understand context, guide behavior change, and accelerate
											outcomes. Our proprietary Relationship AI transforms
											everyday interactions into meaningful engagement that
											drives real business results.
										</p>
										<p>
											This project showcases my expertise in AI integration,
											conversational interfaces, and building scalable platforms
											that bridge the gap between technology and human behavior.
											The platform serves clients ranging in size across
											healthcare and B2B/B2C marketing sectors.
										</p>
									</div>
								</div>

								{/* Two Column Grid for Details */}
								<div className="project-details-grid">
									{/* Technologies Section */}
									<div
										className={`project-section ${isLoaded ? "animate-fade-in-left" : ""}`}
									>
										<h3>Technologies Used</h3>
										<div className="technologies-list">
											{project.technologies.map((tech, index) => (
												<span key={index} className="tech-tag-large">
													{tech}
												</span>
											))}
										</div>
									</div>

									{/* Features Section */}
									<div
										className={`project-section ${isLoaded ? "animate-fade-in-right" : ""}`}
									>
										<h3>Key Features</h3>
										<ul className="features-list">
											<li>Relationship AI-powered digital concierges</li>
											<li>
												Behavioral science integration for behavior change
												acceleration
											</li>
											<li>
												Multi-channel deployment (web, mobile, SMS, email)
											</li>
											<li>
												Real-time conversation tailoring and personalization
											</li>
											<li>
												Generative AI with controlled narrative management
											</li>
										</ul>
									</div>
								</div>

								{/* Project Links - Full Width */}
								<div
									className={`project-links-section ${isLoaded ? "animate-fade-in-up" : ""}`}
								>
									<div className="project-links">
										<button
											onClick={() => setIsModalOpen(true)}
											className="project-link primary"
										>
											<svg
												width="20"
												height="20"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
											Book a Demo
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="bg" />
			</div>

			{/* Calendly Modal */}
			{isModalOpen && (
				<div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<button
							className="modal-close"
							onClick={() => setIsModalOpen(false)}
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
							src="https://calendly.com/maxmatthews/portfolio-demo"
							width="100%"
							height="600"
							frameBorder="0"
							title="Book a Demo"
						></iframe>
					</div>
				</div>
			)}
		</Layout>
	);
};

export const Head = () => {
	return (
		<>
			<title>tuzag Development Studio - Max Matthews</title>
			<meta
				name="description"
				content="Agentic AI platform for building conversational relationships - Project details for Max Matthews portfolio"
			/>
		</>
	);
};

export default TuzagPlatformPage;
