const adapter = require("gatsby-adapter-netlify").default;

module.exports = {
	siteMetadata: {
		title: "Max Matthews",
		author: "Max Matthews",
		description:
			"Max Matthews: Full Stack Javascript Developer, Hacker, Mentor & Entrepreneur. Syracuse, NY, remote, & relocation..",
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
				icon: "src/images/headshot.png", // This path is relative to the root of the site.
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
	adapter: adapter({
		excludeDatastoreFromEngineFunction: false,
		imageCDN: false,
	}),
};
