module.exports = {
	siteMetadata: {
		title: "Max Matthews",
		author: "Max Matthews",
		description:
			"Max Matthews is CTO @ tuzag. Full Stack Javascript Developer, Hacker, Mentor & Entrepreneur. Syracuse, NY.",
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
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				// Use the embedded implementation to avoid the legacy JS API
				implementation: require("sass-embedded"),
				sassOptions: {
					includePaths: ["src/assets/scss"],
					// Optional: temporarily silence warnings while upgrading other tooling
					// silenceDeprecations: ["legacy-js-api"],
				},
			},
		},

		"gatsby-plugin-offline",
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{ resolve: `gatsby-plugin-purgecss`, develop: true },
		// "gatsby-plugin-webpack-bundle-analyser-v2",
	],
};
