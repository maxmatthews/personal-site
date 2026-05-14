import { useEffect, useState } from "react";

const FEED_URL =
	"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@maxmatthews";
const FALLBACK_IMG = "https://cdn-icons-png.flaticon.com/512/5968/5968885.png";

const stripHtml = (html) =>
	html
		.replace(/<\/?[^>]+(>|$)/g, "")
		.replace(/&nbsp;/g, " ")
		.substring(0, 150) + "...";

const firstImgFromHtml = (html) => {
	const m = html.match(/<img[^>]+src=["']([^"'>]+)["'][^>]*>/i);
	return m ? m[1] : null;
};

export default function RecentPosts() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [visible, setVisible] = useState(2);

	useEffect(() => {
		let cancelled = false;
		(async () => {
			try {
				const res = await fetch(FEED_URL);
				const data = await res.json();
				if (data.status !== "ok" || !data.items) return;
				if (cancelled) return;
				setPosts(
					data.items.slice(0, 6).map((p) => ({
						guid: p.guid,
						title: p.title,
						link: p.link,
						pubDate: p.pubDate,
						thumbnail: p.thumbnail || firstImgFromHtml(p.description) || FALLBACK_IMG,
						description: stripHtml(p.description),
					})),
				);
			} catch (err) {
				console.error("Error fetching Medium posts:", err);
			} finally {
				if (!cancelled) setLoading(false);
			}
		})();
		return () => {
			cancelled = true;
		};
	}, []);

	if (loading) {
		return <div className="loading">Loading recent posts...</div>;
	}

	return (
		<div id="wrapper" style={{ paddingTop: 0, minHeight: "auto" }}>
			<div
				className="portfolio-page loaded posts"
				style={{ paddingTop: 0, minHeight: "auto" }}
			>
				<div
					className="projects-section animate-fade-in-up"
					style={{ marginTop: 0 }}
				>
					<h2>Recent Blog Posts</h2>
					<div className="portfolio-grid">
						{posts.slice(0, visible).map((post, idx) => (
							<a
								key={post.guid}
								href={post.link}
								target="_blank"
								rel="noopener noreferrer"
								className="project-card animate-fade-in-up"
								style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
							>
								<div className="project-content">
									{post.thumbnail && (
										<img
											src={post.thumbnail}
											alt={post.title}
											loading="lazy"
											decoding="async"
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
									<span className="learn-more-button">Read</span>
								</div>
							</a>
						))}
					</div>
					{posts.length > visible && (
						<div style={{ textAlign: "center", marginTop: "2rem" }}>
							<button
								type="button"
								onClick={() =>
									setVisible((v) => Math.min(v + 2, posts.length))
								}
								className="learn-more-button"
								style={{ display: "inline-block" }}
							>
								Load More Posts
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
