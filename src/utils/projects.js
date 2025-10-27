import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const projects = [
	{
		id: 1,
		title: "Tailored Content Development Studio",
		description:
			"Agentic AI CMS (content management system) for building conversational relationships.",
		image: (
			<StaticImage
				src={"../images/tcs-screenshot.png"}
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
		company: "tuzag",
	},
	{
		id: 4,
		title: "Ask Jaime (RAG)",
		description:
			"AI-powered digital concierge demonstrating advanced RAG implementation and conversational storytelling",
		technologies: [
			"RAG (Retrieval-Augmented Generation)",
			"Conversational AI",
			"Behavioral Science",
			"React",
			"Express Sockets",
		],
		slug: "tuzag-ask-jaime",
		image: (
			<StaticImage
				src={"../images/jaime-screenshot.png"}
				alt={`Ask Jaime website screenshot`}
				className="project-screenshot"
			/>
		),
		company: "tuzag",
	},
	{
		id: 2,
		title: "Content API",
		description:
			"RESTful API for generating tailored content on the fly stored in headless CMS or generated using Gen AI.",
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
			"AI",
			"REST API",
			"Microservices",
		],
		slug: "tuzag-content-api",
		company: "tuzag",
	},
	{
		id: 3,
		title: "Careers In Code Bootcamp",
		description:
			"6-month full-stack JavaScript bootcamp with modernized curriculum incorporating AI tools and APIs.",
		image: (
			<StaticImage
				src={"../images/careers-in-code.jpg"}
				alt={`Careers In Code logo`}
				className="project-screenshot"
			/>
		),
		technologies: ["JavaScript", "React", "Node.js", "AI Tools", "LMS"],
		slug: "careers-in-code",
		company: "hack-upstate",
	},
	// Add more projects as needed, with the correct company key
];
