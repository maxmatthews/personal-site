import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import { getBackgroundImage } from "../../utils/background";

const TuzagPage = () => {
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

	const companyProjects = [
		{
			id: 1,
			title: "AI-Powered Conversational Bot",
			description: "Integrated third-party LLMs (OpenAI, Gemini) with RAG knowledge base for dynamic content generation",
			technologies: ["OpenAI API", "Gemini API", "RAG", "Node.js", "React"],
			slug: "tuzag-platform"
		},
		{
			id: 2,
			title: "VA Remote Patient Monitoring",
			description: "Mobile development and integrated remote patient monitoring system for Veterans Administration",
			technologies: ["React Native", "Node.js", "Google Cloud Platform", "Life365"],
			slug: "analytics-dashboard"
		},
		{
			id: 3,
			title: "Multi-Channel Conversational AI",
			description: "Scalable conversational AI applications with data-driven personalization systems",
			technologies: ["Node.js", "React", "React Native", "MySQL", "Google Cloud Platform"],
			slug: "ecommerce-solution"
		}
	];

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
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</Link>
					<div className={`company-page ${isLoaded ? 'loaded' : ''}`}>
						<div className={`company-header ${isLoaded ? 'animate-fade-in-up' : ''}`}>
							<h1>tuzag, inc.</h1>
							<p className="company-subtitle">CTO • Lead Developer • Rapid Prototyping Specialist • July 2015 - Present</p>
							<div className="company-description">
								<p>
									Entrepreneurial senior full-stack JavaScript developer and technical leader with 10+ years of experience building, scaling, and shipping applications across startups, enterprise, and government by leveraging modern tools and AI technologies. Skilled at rapidly delivering MVPs, validating product-market fit, and guiding projects from prototype to production while wearing multiple hats.
								</p>
								<p>
									Experienced in hiring and mentoring teams with a focus on culture, productivity, and impact. Thrives in lean, fast-moving environments while promoting communication.
								</p>
							</div>
						</div>

						<div className={`company-projects-section ${isLoaded ? 'animate-fade-in-up' : ''}`}>
							<h2>Key Projects at tuzag</h2>
							<div className="company-projects-grid">
								{companyProjects.map((project, index) => (
									<Link 
										key={project.id} 
										to={`/portfolio/${project.slug}`}
										className={`company-project-card ${isLoaded ? 'animate-fade-in-up' : ''}`}
										style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
									>
										<div className="project-image">
											<div className="placeholder-image">
												<span>{project.title.charAt(0)}</span>
											</div>
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

						<div className={`company-achievements ${isLoaded ? 'animate-fade-in-up' : ''}`}>
							<h2>Key Achievements</h2>
							<div className="achievements-grid">
								<div className="achievement-item">
									<h3>AI Integration Leadership</h3>
									<p>Integrated third-party LLMs (OpenAI, Gemini) to build AI-powered bots with RAG knowledge base for context-aware responses</p>
								</div>
								<div className="achievement-item">
									<h3>Team Building & Culture</h3>
									<p>Built and scaled software teams from zero, establishing culture and career growth paths for senior and junior developers</p>
								</div>
								<div className="achievement-item">
									<h3>Government Contracting</h3>
									<p>Led mobile development and architected integrated remote patient monitoring system for Veterans Administration (Life365 subcontract)</p>
								</div>
								<div className="achievement-item">
									<h3>Technical Strategy</h3>
									<p>Defined and executed technical strategy for startup and enterprise clients, delivering scalable full stack JavaScript applications</p>
								</div>
								<div className="achievement-item">
									<h3>Data-Driven Solutions</h3>
									<p>Built data-driven personalization systems that turned large datasets into actionable, automated communication flows</p>
								</div>
								<div className="achievement-item">
									<h3>Rapid Prototyping</h3>
									<p>Delivered iterative prototypes that evolved into production-ready deployments, validating ideas with real users</p>
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
			<title>tuzag, inc. - Max Matthews</title>
			<meta
				name="description"
				content="Projects and achievements at tuzag, inc. - CTO and Lead Developer with AI integration and team leadership experience"
			/>
		</>
	);
};

export default TuzagPage;
