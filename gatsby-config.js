module.exports = {
	siteMetadata: {
		title: "Max Matthews",
		author: "Max Matthews",
		description:
			"Max Matthews is CTO @ tuzag && Lead Instructor @ Careers in Code. Full Stack Javascript Developer, Hacker, Mentor & Entrepreneur. Syracuse, NY.",
	},
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: "gatsby-starter-default",
				short_name: "starter",
				start_url: "/",
				background_color: "#663399",
				theme_color: "#663399",
				display: "minimal-ui",
				icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
			},
		},
		"gatsby-plugin-sass",
		"gatsby-plugin-offline",
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				headers: {
					"/*": [
						"Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
					],
				}, // option to add more headers. `Link` headers are transformed by the below criteria
			},
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{ resolve: `gatsby-plugin-purgecss`, develop: true },
		// "gatsby-plugin-webpack-bundle-analyser-v2",
	],
};
