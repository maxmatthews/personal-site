import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import { getBackgroundImage } from "../../utils/background";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "@gatsbyjs/reach-router";
import { projects } from "../../utils/projects";

const JaimeRagPage = () => {
	const project = projects[1];

	const [bgImage, setBgImage] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		const bgImage = getBackgroundImage();
		if (bgImage) {
			setBgImage(bgImage);
		}

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
										src="../../images/jaime-screenshot.png"
										alt="Jaime RAG Concierge Screenshot"
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
											Jaime represents a sophisticated implementation of RAG
											(Retrieval-Augmented Generation) technology, serving as
											tuzag's digital concierge and demonstrating how AI can
											transform from simple question-answering to building
											lasting relationships. This project showcases my technical
											leadership in creating conversational AI that goes beyond
											transactions to deliver personalized, contextually-aware
											experiences.
										</p>
										<p>
											As CTO, I architected Jaime to demonstrate tuzag's unique
											"Relationship AI" approach—combining traditional RAG
											principles with behavioral science and multidimensional
											conversational storytelling. Rather than just retrieving
											facts, Jaime retrieves behavioral and contextual
											relevance, adapting conversations in real-time based on
											user attributes, interaction history, and business
											objectives.
										</p>
										<p>
											This project exemplifies my expertise in AI integration,
											prompt engineering, and building scalable systems that
											bridge cutting-edge AI capabilities with real-world
											business needs. Jaime serves as both a working product and
											a proof-of-concept for how RAG systems can evolve from
											audit systems for facts into engagement systems for
											behavior change.
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
											<li>
												Advanced RAG implementation for contextual knowledge
												retrieval
											</li>
											<li>Multi-mode interactions (chat, Q&A, voice-ready)</li>
											<li>
												Dynamic content tailoring based on user attributes
											</li>
											<li>Behavioral science-informed conversation flows</li>
											<li>Real-time Generative AI prompt engineering</li>
											<li>
												Relationship-building over transactional responses
											</li>
										</ul>
									</div>
								</div>

								{/* Technical Highlights - Full Width */}
								<div
									className={`project-about-section ${isLoaded ? "animate-fade-in-up" : ""}`}
								>
									<h3>Technical Details</h3>
									<div className="project-description">
										<p>
											<strong>Strategic RAG Architecture:</strong> Unlike
											traditional RAG systems that simply retrieve documents,
											Jaime implements a sophisticated knowledge base that
											retrieves content tailored to both the query and the
											individual user's cognitive-behavioral profile. This "3-D
											Storytelling" approach creates millions of potential
											message combinations while maintaining narrative
											coherence.
										</p>
										<p>
											<strong>Omni-channel Ready:</strong> The underlying
											architecture supports deployment across web, mobile, SMS,
											email, IVR, and voice assistants—demonstrating my
											expertise in building truly platform-agnostic AI systems.
										</p>
									</div>
								</div>

								{/* Project Links - Full Width */}
								<div
									className={`project-links-section ${isLoaded ? "animate-fade-in-up" : ""}`}
								>
									<div className="project-links">
										<a
											href="https://askjaime.wearetuzag.com"
											target="_blank"
											rel="noopener noreferrer"
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
													d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
											Experience Jaime Live
										</a>
										<button
											onClick={() => setIsModalOpen(true)}
											className="project-link"
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
											Schedule a Demo
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
							title="Schedule a Demo"
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
			<title>Jaime RAG Concierge - Max Matthews</title>
			<meta
				name="description"
				content="AI-powered digital concierge demonstrating advanced RAG implementation and conversational storytelling - Project details for Max Matthews portfolio"
			/>
		</>
	);
};

export default JaimeRagPage;
