import React, { useState, useEffect } from "react";

const RecentPosts = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch(
					"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@maxmatthews",
				);
				const data = await response.json();

				if (data.status === "ok" && data.items) {
					const getFirstImageFromHTML = (html) => {
						const match = html.match(/<img[^>]+src=["']([^"'>]+)["'][^>]*>/i);
						return match ? match[1] : null;
					};

					const fallbackImage =
						"https://cdn-icons-png.flaticon.com/512/5968/5968885.png"; // Example fallback image

					const formattedPosts = data.items.slice(0, 3).map((post) => {
						let thumbnail = post.thumbnail;
						if (!thumbnail) {
							thumbnail =
								getFirstImageFromHTML(post.description) || fallbackImage;
						}
						return {
							guid: post.guid,
							title: post.title,
							link: post.link,
							pubDate: post.pubDate,
							thumbnail,
							description:
								post.description
									.replace(/<\/?[^>]+(>|$)/g, "")
									.replace(/&nbsp;/g, " ")
									.substring(0, 150) + "...",
						};
					});
					setPosts(formattedPosts);
				} else {
					console.error("Invalid response format:", data);
				}
			} catch (error) {
				console.error("Error fetching Medium posts:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	if (loading) {
		return <div className="loading">Loading recent posts...</div>;
	}

	return (
		<>
			<div id="wrapper" style={{ paddingTop: 0 }}>
				<div className="portfolio-page loaded posts" style={{ paddingTop: 0 }}>
					<div
						className="projects-section animate-fade-in-up"
						style={{ marginTop: 0 }}
					>
						<h2>Recent Blog Posts</h2>
						<div className="portfolio-grid">
							{posts.map((post, index) => (
								<a
									key={post.guid}
									href={post.link}
									target="_blank"
									rel="noopener noreferrer"
									className={`project-card animate-fade-in-up`}
									style={{ animationDelay: `${0.2 + index * 0.1}s` }}
								>
									<div className="project-content">
										{post.thumbnail && (
											<img
												src={post.thumbnail}
												alt={post.title}
												style={{
													width: "100%",
													borderRadius: "8px",
													marginBottom: "10px",
												}}
											/>
										)}
										<h3>{post.title}</h3>
										<div className="tech-tag">
											{new Date(post.pubDate).toLocaleDateString()}
										</div>
										<p>{post.description}</p>
										<button className="learn-more-button">Read</button>
									</div>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
			<div id="bg" />
		</>
	);
};

export default RecentPosts;
