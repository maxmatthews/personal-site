// Background utility to maintain consistent background across all pages
const BACKGROUND_STORAGE_KEY = 'selectedBackgroundImage';

export const getBackgroundImage = () => {
	// Check if we're in the browser environment
	if (typeof window === 'undefined') {
		return null;
	}

	// Try to get the stored background image
	const storedBg = localStorage.getItem(BACKGROUND_STORAGE_KEY);
	
	if (storedBg) {
		return storedBg;
	}

	// If no stored background, generate a new one and store it
	const randNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
	const bgNumber = randNum(1, 50);
	const bgImage = `/bgs/bg-0${bgNumber}.webp`;
	
	// Store the selected background
	localStorage.setItem(BACKGROUND_STORAGE_KEY, bgImage);
	
	return bgImage;
};

export const resetBackgroundImage = () => {
	if (typeof window !== 'undefined') {
		localStorage.removeItem(BACKGROUND_STORAGE_KEY);
	}
};
