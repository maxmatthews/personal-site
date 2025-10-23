import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import { getBackgroundImage } from "../../utils/background";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "@gatsbyjs/reach-router";

const CareersInCodePage = () => {
	const project = {
		id: 2,
		title: "Careers In Code",
		description:
			"Dean of Students & Lead Instructor at coding bootcamp combating poverty through tech education",
		image: "project2",
		technologies: [
			"JavaScript",
			"React",
			"Node.js",
			"AI Integration",
			"Curriculum Development",
		],
		slug: "careers-in-code",
	};

	const [bgImage, setBgImage] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);

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
							<p className="project-tenure">
								February 2022 - October 2024 (Dean of Students & Lead
								Instructor) | April 2019 - February 2022 (Instructor)
							</p>
						</div>

						<div className="project-content-grid">
							{/* Hero Image Section */}
							<div
								className={`project-hero-section ${isLoaded ? "animate-fade-in-up" : ""}`}
							>
								<div className="project-image-large">
									<StaticImage
										src="../../images/careers-in-code.jpg"
										alt="Careers In Code Educational Platform"
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
									<h3>About The Program</h3>
									<div className="project-description">
										<p>
											Careers in Code is a 24-week, part-time coding bootcamp
											operated by Hack Upstate that combats poverty in Central
											New York by providing free full-stack JavaScript education
											to women and people of color in distressed areas. The
											program has achieved a 91% graduation rate and 72%
											placement rate, with graduates seeing an average 56%
											salary increase.
										</p>
										<p>
											As a CIRR-certified school partnering with organizations
											like Le Moyne College, the program maintains transparent,
											industry-standard reporting on graduate outcomes. Students
											complete comprehensive curriculum covering modern web
											development, culminating in individual capstone projects
											on topics they're passionate about.
										</p>
									</div>
								</div>

								{/* My Role Section - Full Width */}
								<div
									className={`project-about-section ${isLoaded ? "animate-fade-in-up" : ""}`}
								>
									<h3>My Role & Impact</h3>
									<div className="project-description">
										<p>
											As Dean of Students & Lead Instructor, I led all program
											operations including nightly live classes, personalized
											1:1 mentoring sessions, and building a thriving alumni
											network. I was responsible for the full student experience
											from onboarding through career placement.
										</p>
										<p>
											I modernized the entire full-stack curriculum and Learning
											Management System by incorporating practical applications
											of AI tools and APIs—including OpenAI and other emerging
											technologies—preparing students for current industry
											trends and teaching them how to rapidly learn new
											technologies in a fast-evolving field.
										</p>
										<p>
											Beyond teaching technical skills, I built robust student
											pipelines into tech careers through comprehensive code
											reviews, project-based learning methodologies, and ongoing
											career mentorship. This hands-on approach helped students
											transition from complete beginners to job-ready developers
											in six months.
										</p>
									</div>
								</div>

								{/* Two Column Grid for Details */}
								<div className="project-details-grid">
									{/* Technologies Section */}
									<div
										className={`project-section ${isLoaded ? "animate-fade-in-left" : ""}`}
									>
										<h3>Technologies & Curriculum</h3>
										<div className="technologies-list">
											{project.technologies.map((tech, index) => (
												<span key={index} className="tech-tag-large">
													{tech}
												</span>
											))}
										</div>
									</div>

									{/* Key Contributions Section */}
									<div
										className={`project-section ${isLoaded ? "animate-fade-in-right" : ""}`}
									>
										<h3>Key Contributions</h3>
										<ul className="features-list">
											<li>
												Led nightly live instruction for cohorts of 15-20
												students
											</li>
											<li>
												Modernized curriculum with AI tools and modern
												frameworks
											</li>
											<li>
												Provided 1:1 mentoring and personalized learning paths
											</li>
											<li>
												Built alumni network and career placement pipelines
											</li>
											<li>
												Conducted comprehensive code reviews and project
												feedback
											</li>
											<li>
												Developed project-based learning capstone experiences
											</li>
										</ul>
									</div>
								</div>

								{/* Program Outcomes - Full Width */}
								<div
									className={`project-about-section ${isLoaded ? "animate-fade-in-up" : ""}`}
								>
									<h3>Program Outcomes</h3>
									<div className="project-description">
										<p>
											The program's first cohort achieved exceptional results
											with a 91% graduation rate and 72% job placement rate.
											Graduates saw an average 56% salary increase, with the
											average starting salary reaching $64,528—significantly
											above the bootcamp industry average of $53,273.
										</p>
										<p>
											Through partnerships with local tech companies and ongoing
											career support, students successfully transitioned into
											software development roles throughout Central New York,
											helping to grow the region's technology sector while
											creating economic opportunities for underrepresented
											communities.
										</p>
									</div>
								</div>

								{/* Project Links - Full Width */}
								<div
									className={`project-links-section ${isLoaded ? "animate-fade-in-up" : ""}`}
								>
									<div className="project-links">
										<a
											href="https://careersincode.org"
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
											View Program Website
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="bg" />
			</div>
		</Layout>
	);
};

export const Head = () => {
	return (
		<>
			<title>Careers In Code - Max Matthews</title>
			<meta
				name="description"
				content="Dean of Students & Lead Instructor at Careers In Code coding bootcamp - Led operations, modernized AI-integrated curriculum, and built career pipelines for diverse students."
			/>
		</>
	);
};

export default CareersInCodePage;
