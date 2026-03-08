import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

/**
 * Format an RSS/article pubDate for display: returns only the year (e.g. "2026").
 * @param {string} pubDate - Stored value (ISO string or raw from feed)
 * @param {string} [_locale] - Unused; kept for API compatibility
 * @returns {string}
 */
export function formatArticleDate(pubDate, _locale = 'en-US') {
	const s = pubDate && typeof pubDate === 'string' ? pubDate.trim() : '';
	if (!s) return '';
	const d = new Date(s);
	if (!Number.isNaN(d.getTime())) return String(d.getFullYear());
	const yearMatch = s.match(/\d{4}/);
	return yearMatch ? yearMatch[0] : '';
}
