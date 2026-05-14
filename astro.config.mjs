import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";

export default defineConfig({
	site: "https://maxmatthe.ws",
	output: "static",
	integrations: [
		react(),
		sitemap(),
		AstroPWA({
			registerType: "autoUpdate",
			manifest: {
				name: "Max Matthews",
				short_name: "Max Matthews",
				description: "Max Matthews — Applied AI Full Stack Developer",
				theme_color: "#663399",
				background_color: "#663399",
				display: "minimal-ui",
				start_url: "/",
				icons: [
					{
						src: "/images/headshot.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any maskable",
					},
				],
			},
			workbox: {
				globPatterns: ["**/*.{js,css,html,svg,jpg,jpeg,webp,woff,woff2}"],
				globIgnores: ["**/og_image.png", "**/headshot.png"],
				navigateFallback: null,
				maximumFileSizeToCacheInBytes: 5_000_000,
			},
		}),
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: "modern-compiler",
					loadPaths: ["src/assets/scss"],
					silenceDeprecations: ["legacy-js-api", "import", "global-builtin"],
				},
			},
		},
	},
});
