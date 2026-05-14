// Background utility — maintains a consistent background image across pages
// using localStorage with a 1-hour TTL.
const BACKGROUND_STORAGE_KEY = "selectedBackgroundImage";
const BACKGROUND_TIMESTAMP_KEY = "selectedBackgroundImageTimestamp";

export const getBackgroundImage = (): string | null => {
	if (typeof window === "undefined") return null;

	const storedBg = localStorage.getItem(BACKGROUND_STORAGE_KEY);
	const storedTimestamp = localStorage.getItem(BACKGROUND_TIMESTAMP_KEY);
	const now = Date.now();
	const ONE_HOUR = 60 * 60 * 1000;

	if (storedBg && storedTimestamp) {
		const lastSelected = parseInt(storedTimestamp, 10);
		if (!isNaN(lastSelected) && now - lastSelected < ONE_HOUR) {
			return storedBg;
		}
	}

	const bgNumber = Math.floor(Math.random() * 50) + 1;
	const bgImage = `/bgs/bg-0${bgNumber}.webp`;

	localStorage.setItem(BACKGROUND_STORAGE_KEY, bgImage);
	localStorage.setItem(BACKGROUND_TIMESTAMP_KEY, now.toString());

	return bgImage;
};

// Inline script string for use in <script is:inline> blocks across pages.
// Applies the current background to #bg:after.
export const APPLY_BG_INLINE_SCRIPT = `
(function() {
	var key = "selectedBackgroundImage";
	var tsKey = "selectedBackgroundImageTimestamp";
	var ONE_HOUR = 3600000;
	var stored = localStorage.getItem(key);
	var ts = localStorage.getItem(tsKey);
	var now = Date.now();
	var bg = stored && ts && (now - parseInt(ts, 10)) < ONE_HOUR ? stored : null;
	if (!bg) {
		var n = Math.floor(Math.random() * 50) + 1;
		bg = "/bgs/bg-0" + n + ".webp";
		localStorage.setItem(key, bg);
		localStorage.setItem(tsKey, String(now));
	}
	var style = document.createElement("style");
	style.textContent = "#bg:after { background-image: url('" + bg + "'); }";
	document.head.appendChild(style);
})();
`;
