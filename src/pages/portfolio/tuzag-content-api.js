import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { getBackgroundImage } from "../../utils/background";

const TuzagContentApiPage = () => {
	const project = {
		id: 4,
		title: "tuzag Content API",
		description: "Intelligent content management system for Relationship AI",
		image: "project4",
		technologies: [
			"Node.js",
			"Express",
			"MongoDB",
			"Redis",
			"AI",
			"REST API",
			"Google Cloud",
		],
		slug: "tuzag-content-api",
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
					<Link to="/portfolio" className="back-button-fixed">
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
					</Link>
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
									<div className="placeholder-image-large">
										<StaticImage
											src="../../images/tuzag-content-api-diagram.svg"
											alt="tuzag Content API Architecture Diagram"
											className="project-screenshot"
										/>
									</div>
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
											The tuzag Content API is a sophisticated microservice
											architecture that powers the content management and
											delivery system for tuzag's Relationship AI platform. As
											CTO, I architected and developed this intelligent content
											system that enables real-time content tailoring and
											behavioral science integration.
										</p>
										<p>
											This API serves as the backbone for our Relationship AI
											concierges, managing multi-dimensional content libraries,
											user behavioral data, and contextual information to
											deliver personalized interactions at scale. The system
											leverages advanced content retrieval and augmentation
											techniques to ensure every conversation is both relevant
											and outcome-driven.
										</p>
										<p>
											The Content API demonstrates my expertise in building
											scalable microservices, AI-powered content management, and
											creating systems that bridge behavioral science with
											conversational technology. It handles content requests
											while maintaining response times for real-time
											interactions.
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
											<li>Intelligent content retrieval and augmentation</li>
											<li>Real-time behavioral data integration</li>
											<li>Multi-dimensional content library management</li>
											<li>Contextual content tailoring algorithms</li>
											<li>High-performance microservice architecture</li>
											<li>Advanced caching and optimization strategies</li>
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
			<title>tuzag Content API - Max Matthews</title>
			<meta
				name="description"
				content="Intelligent content management system for Relationship AI - Project details for Max Matthews portfolio"
			/>
		</>
	);
};

export default TuzagContentApiPage;
