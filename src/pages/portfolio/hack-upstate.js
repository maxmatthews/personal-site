import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import { getBackgroundImage } from "../../utils/background";
import { navigate } from "@gatsbyjs/reach-router";
import { StaticImage } from "gatsby-plugin-image";
import { projects } from "/src/utils/projects";

const HackUpstatePage = () => {
	const [bgImage, setBgImage] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);

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

	// Filter projects by company
	const companyProjects = projects.filter(
		(project) => project.company === "hack-upstate",
	);

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
					<div className={`company-page ${isLoaded ? "loaded" : ""}`}>
						<div
							className={`company-header ${isLoaded ? "animate-fade-in-up" : ""}`}
						>
							<h1>Hack Upstate - Careers in Code</h1>
							<p className="company-subtitle">
								Dean of Students & Lead Instructor • Instructor • April 2019 -
								October 2024
							</p>
							<div className="company-description">
								<p>
									Led software education program operations, including nightly
									live classes, 1:1 mentoring, and alumni network building.
									Modernized the full-stack curriculum & LMS by incorporating
									practical applications of AI tools and APIs, preparing
									students for emerging industry trends and learning new
									technologies.
								</p>
								<p>
									Built student pipelines into tech careers through code
									reviews, project-based learning, and career mentorship.
									Instructed students at a 6-month bootcamp in full-stack
									JavaScript with part-time role teaching, curriculum
									development, & student mentoring.
								</p>
							</div>
						</div>

						<div
							className={`company-projects-section ${isLoaded ? "animate-fade-in-up" : ""}`}
						>
							<h2>Key Programs at Hack Upstate</h2>
							<div className="company-projects-grid">
								{companyProjects.map((project, index) => (
									<Link
										key={project.id}
										to={`/portfolio/${project.slug}`}
										className={`company-project-card ${isLoaded ? "animate-fade-in-up" : ""}`}
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
												{project.technologies.map((tech, index) => (
													<span key={index} className="tech-tag">
														{tech}
													</span>
												))}
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>

						<div
							className={`company-achievements ${isLoaded ? "animate-fade-in-up" : ""}`}
						>
							<h2>Key Achievements</h2>
							<div className="achievements-grid">
								<div className="achievement-item">
									<h3>Curriculum Modernization</h3>
									<p>
										Modernized the full-stack curriculum & LMS by incorporating
										practical applications of AI tools and APIs
									</p>
								</div>
								<div className="achievement-item">
									<h3>Program Leadership</h3>
									<p>
										Led software education program operations, including nightly
										live classes, 1:1 mentoring, and alumni network building
									</p>
								</div>
								<div className="achievement-item">
									<h3>Student Success Pipeline</h3>
									<p>
										Built student pipelines into tech careers through code
										reviews, project-based learning, and career mentorship
									</p>
								</div>
								<div className="achievement-item">
									<h3>Industry Preparation</h3>
									<p>
										Prepared students for emerging industry trends and learning
										new technologies through hands-on experience
									</p>
								</div>
								<div className="achievement-item">
									<h3>Teaching Excellence</h3>
									<p>
										Instructed students at a 6-month bootcamp in full-stack
										JavaScript with curriculum development and student mentoring
									</p>
								</div>
								<div className="achievement-item">
									<h3>Alumni Network</h3>
									<p>
										Built and maintained alumni network to support ongoing
										career development and industry connections
									</p>
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
			<title>Hack Upstate - Careers in Code - Max Matthews</title>
			<meta
				name="description"
				content="Projects and achievements at Hack Upstate - Careers in Code - Dean of Students and Lead Instructor with curriculum modernization and student mentoring"
			/>
		</>
	);
};

export default HackUpstatePage;
