import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { getBackgroundImage } from "../utils/background";

const PortfolioSection = ({ id = "portfolio-section" }) => {
	const [bgImage, setBgImage] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// Use the same background image as the homepage
		const bg = getBackgroundImage();
		if (bg) {
			setBgImage(bg);
		}

		// Trigger animation after component mounts
		const timer = setTimeout(() => {
			setIsLoaded(true);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	const projects = [
		{
			id: 1,
			title: "tuzag Development Studio",
			description:
				"Agentic AI CMS (content management system) for building conversational relationships.",
			image: (
				<StaticImage
					src={"../images/tcs-screenshot.svg"}
					alt={`tuzag Development Studio screenshot`}
					className="project-screenshot"
				/>
			),
			technologies: [
				"React",
				"Node.js",
				"Meteor",
				"Mongo",
				"Conversational AI Integrations",
			],
			slug: "tuzag-platform",
		},
		{
			id: 2,
			title: "tuzag Content API",
			description: "RESTful API for generating content stored in headless CMS.",
			image: (
				<StaticImage
					src={"../images/tuzag-content-api-diagram.svg"}
					alt={`tuzag Content API screenshot`}
					className="project-screenshot"
				/>
			),
			technologies: [
				"Node.js",
				"Express",
				"MongoDB",
				"AI/ML",
				"REST API",
				"Microservices",
			],
			slug: "tuzag-content-api",
		},
		{
			id: 3,
			title: "Careers In Code",
			description:
				"Lead Instructor of 24 week bootcamp aimed at combating poverty in Central New York by providing grant funded education in full stack software devleopment.",
			technologies: [
				"Remote Hands On Teaching",
				"Curriculum Development",
				"Mentorship",
			],
			slug: "careers-in-code",
			image: (
				<StaticImage
					src={"../images/careers-in-code.jpg"}
					alt={`Careers In Code logo`}
					className="project-screenshot"
				/>
			),
		},
	];

	return (
		<div id={id} className="body">
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

			<div id="wrapper">
				<div className={`portfolio-page ${isLoaded ? "loaded" : ""}`}>
					<div
						className={`about-section ${isLoaded ? "animate-fade-in-up" : ""}`}
					>
						<h2>About Me</h2>
						<div className="about-content-grid">
							<div className="about-text company-card">
								<p>
									I'm Max Matthews, a senior full-stack JavaScript developer and
									CTO with over a decade of experience turning ideas into
									reality—whether that's building AI-powered conversational
									systems for enterprise clients, scaling startups from zero, or
									mentoring the next generation of developers. My career has
									been defined by a bias toward action: rapid prototyping,
									iterative improvement, and shipping products that solve real
									problems. I bring technical depth in React, Node.js, and cloud
									infrastructure alongside leadership experience in hiring,
									mentoring, and guiding technical strategy. Every project I
									touch, from RAG-powered chatbots to remote patient monitoring
									systems for the VA, gets the same treatment: clear
									requirements, agile execution, and a relentless focus on
									delivering value.
								</p>
								<p>
									Syracuse has been home for over a decade now, ever since I
									stayed after finishing my time at Syracuse University. While
									half my career has been remote, I'm open to relocation
									opportunnites. My dog Stella has been my constant companion
									through most of that journey, and when I'm not coding or
									leading technical strategy at tuzag, you'll find me knee-deep
									in a DIY project on my house or helping a friend troubleshoot
									theirs. I approach everything—whether it's software
									architecture or home renovation—through the lens of the
									software development lifecycle: plan, build, test, iterate,
									and ship.
								</p>
								<p>
									I thrive in environments where I can wear multiple hats,
									bridge the gap between technical execution and business
									strategy, and empower teams to do their best work. Whether I'm
									integrating third-party LLMs, modernizing bootcamp curricula
									with AI tools, or validating product-market fit with rapid
									prototypes, my goal is always the same: build something that
									matters, ship it fast, and make it better along the way.
								</p>
							</div>
							<div className="about-image">
								<StaticImage
									src="../images/max-and-stella.jpeg"
									alt="Max Matthews with Stella"
									className="profile-image"
									placeholder="blurred"
								/>
							</div>
						</div>
					</div>

					<div
						className={`employment-section ${isLoaded ? "animate-fade-in-up" : ""}`}
					>
						<h2>Employment History</h2>
						<div className="employment-grid">
							<Link to="/portfolio/tuzag" className="company-card">
								<div className="company-header">
									<h3>tuzag</h3>
									<span className="company-period">July 2015 - Present</span>
								</div>
								<div className="company-description">
									<p>Conversational AI Startup</p>
									<p>
										Entrepreneurial senior full-stack JavaScript developer and
										technical leader with 10+ years of experience building,
										scaling, and shipping applications across startups,
										enterprise, and government.
									</p>
								</div>
								<div className="company-projects">
									<span className="project-count">AI Integration</span>
									<span className="project-count">Daily Development</span>
									<span className="project-count">Team Leadership</span>
								</div>
								<button className="learn-more-button">Learn More</button>
							</Link>

							<Link to="/portfolio/hack-upstate" className="company-card">
								<div className="company-header">
									<h3>Hack Upstate</h3>
									<span className="company-period">
										April 2019 - October 2024
									</span>
								</div>
								<div className="company-description">
									<p>Careers in Code Bootcamp</p>
									<p>
										Led software education program operations, modernized
										curriculum with AI tools, and built student pipelines into
										tech careers.
									</p>
								</div>
								<div className="company-projects">
									<span className="project-count">Curriculum Development</span>
									<span className="project-count">Student Mentoring</span>
								</div>
								<button className="learn-more-button">Learn More</button>
							</Link>
						</div>
					</div>

					<div
						className={`projects-section ${isLoaded ? "animate-fade-in-up" : ""}`}
					>
						<h2>Featured Projects</h2>
						<div className="portfolio-grid">
							{projects.map((project, index) => (
								<Link
									key={project.id}
									to={`/portfolio/${project.slug}`}
									className={`project-card ${isLoaded ? "animate-fade-in-up" : ""}`}
									style={{ animationDelay: `${0.2 + index * 0.1}s` }}
								>
									<div className="project-image">
										{project.image || (
											<div className="placeholder-image">
												<span>{project.title.charAt(0)}</span>
											</div>
										)}
									</div>
									<div className="project-content">
										<h3>{project.title}</h3>
										<p>{project.description}</p>
										<div className="project-technologies">
											{project.technologies.map((tech, idx) => (
												<span key={idx} className="tech-tag">
													{tech}
												</span>
											))}
										</div>
										<button className="learn-more-button">Learn More</button>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
			<div id="bg" />
		</div>
	);
};

export default PortfolioSection;
