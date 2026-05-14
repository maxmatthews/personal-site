export interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	technologies: string[];
	slug: string;
	company: string;
}

export const projects: Project[] = [
	{
		id: 1,
		title: "Tailored Content Development Studio",
		description:
			"Agentic AI CMS (content management system) for building conversational relationships.",
		image: "/images/tcs-screenshot.webp",
		imageAlt: "tuzag Development Studio screenshot",
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
		image: "/images/jaime-screenshot.webp",
		imageAlt: "Ask Jaime website screenshot",
		technologies: [
			"RAG (Retrieval-Augmented Generation)",
			"Conversational AI",
			"Behavioral Science",
			"React",
			"Express Sockets",
		],
		slug: "tuzag-ask-jaime",
		company: "tuzag",
	},
	{
		id: 2,
		title: "Content API",
		description:
			"RESTful API for generating tailored content on the fly stored in headless CMS or generated using Gen AI.",
		image: "/images/tuzag-content-api-diagram.svg",
		imageAlt: "tuzag Content API screenshot",
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
		image: "/images/careers-in-code.webp",
		imageAlt: "Careers In Code logo",
		technologies: ["JavaScript", "React", "Node.js", "AI Tools", "LMS"],
		slug: "careers-in-code",
		company: "hack-upstate",
	},
];
