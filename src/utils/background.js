// Background utility to maintain consistent background across all pages
const BACKGROUND_STORAGE_KEY = "selectedBackgroundImage";
const BACKGROUND_TIMESTAMP_KEY = "selectedBackgroundImageTimestamp";

export const getBackgroundImage = () => {
	// Check if we're in the browser environment
	if (typeof window === "undefined") {
		return null;
	}

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

	// If no stored background or it's older than an hour, generate a new one and store it
	const randNum = (min, max) =>
		Math.floor(Math.random() * (max - min + 1)) + min;
	const bgNumber = randNum(1, 50);
	const bgImage = `/bgs/bg-0${bgNumber}.webp`;

	localStorage.setItem(BACKGROUND_STORAGE_KEY, bgImage);
	localStorage.setItem(BACKGROUND_TIMESTAMP_KEY, now.toString());

	return bgImage;
};

export const resetBackgroundImage = () => {
	if (typeof window !== "undefined") {
		localStorage.removeItem(BACKGROUND_STORAGE_KEY);
		localStorage.removeItem(BACKGROUND_TIMESTAMP_KEY);
	}
};
